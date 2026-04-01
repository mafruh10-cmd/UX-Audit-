import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartTooltip,
  ResponsiveContainer, LineChart, Line, AreaChart, Area, ReferenceLine, Legend,
} from 'recharts'
import {
  TrendingDown, TrendingUp, Users, DollarSign, Activity, Target,
  Lock, CheckCircle, AlertTriangle, Minus, RefreshCw, ArrowLeft,
  Rocket, Zap, CalendarDays, HeartHandshake, CreditCard, Tag,
  MessageSquare, BarChart2, ChevronRight, Info, Lightbulb,
} from 'lucide-react'
import {
  getCustomerChurnHealth,
  getRevenueChurnHealth,
  getGRRHealth,
  getNRRHealth,
  getRetentionHealthScore,
  getBenchmarkComparisons,
} from '../lib/benchmarkEngine.js'
import { generateInsights } from '../lib/insightEngine.js'
import { forecastComparison, generateRetentionCurve } from '../lib/forecastEngine.js'
import {
  formatPercent, formatCurrency, formatNumber, formatMonths, formatMultiple, formatPeriod,
} from '../lib/formatters.js'
import {
  TabBar, SectionHeader, HealthBadge, MetricCard, InfoAlert, EmptyState,
} from './ui/shared.jsx'

// ─── Icon map for dynamic icon rendering ─────────────────────────────────────
const ICON_MAP = {
  Rocket, Zap, CalendarDays, HeartHandshake, CreditCard, Tag, MessageSquare,
  TrendingUp, TrendingDown, Users, DollarSign, Activity,
}

function DynamicIcon({ name, size = 16, className }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}

// ─── Retention Health Gauge (SVG semi-circle) ─────────────────────────────────
function RetentionHealthGauge({ score, label, color }) {
  const cx = 80
  const cy = 80
  const r  = 60
  const strokeWidth = 10

  // Semi-circle arc: from left (π) to right (0), sweep clockwise
  const startAngle = Math.PI          // 180°
  const endAngle   = 0                // 0° = right
  const range      = Math.PI          // 180° total

  const filled = score !== null ? (score / 100) * range : 0

  function polarToXY(angle, radius) {
    return {
      x: cx + radius * Math.cos(angle),
      y: cy - radius * Math.sin(angle),
    }
  }

  // Background arc: full 180°
  const bgStart = polarToXY(startAngle, r)
  const bgEnd   = polarToXY(endAngle, r)
  const bgPath  = `M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 0 1 ${bgEnd.x} ${bgEnd.y}`

  // Foreground arc: 0 → filled radians from left
  const fgEndAngle = startAngle - filled // going clockwise (decreasing angle)
  const fgEnd = polarToXY(fgEndAngle, r)
  const largeArc = filled > Math.PI / 2 ? 1 : 0
  const fgPath  = filled > 0
    ? `M ${bgStart.x} ${bgStart.y} A ${r} ${r} 0 ${largeArc} 1 ${fgEnd.x} ${fgEnd.y}`
    : ''

  const colorStroke = {
    emerald: '#10b981',
    green:   '#22c55e',
    amber:   '#f59e0b',
    red:     '#ef4444',
  }
  const c = colorStroke[color] || '#10b981'

  return (
    <div className="flex flex-col items-center">
      <svg width={160} height={100} viewBox="0 0 160 100">
        {/* Background track */}
        <path
          d={bgPath}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Filled arc */}
        {fgPath && (
          <path
            d={fgPath}
            fill="none"
            stroke={c}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ transition: 'all 0.6s ease' }}
          />
        )}
        {/* Score text */}
        {score !== null && (
          <>
            <text
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              fontSize="22"
              fontWeight="800"
              fontFamily="Inter, system-ui, sans-serif"
              fill={c}
            >
              {score}
            </text>
            <text
              x={cx}
              y={cy + 20}
              textAnchor="middle"
              fontSize="9"
              fontWeight="500"
              fontFamily="Inter, system-ui, sans-serif"
              fill="#9ca3af"
            >
              / 100
            </text>
          </>
        )}
        {score === null && (
          <text x={cx} y={cy + 6} textAnchor="middle" fontSize="14" fill="#9ca3af" fontFamily="Inter">—</text>
        )}
      </svg>
      {label && (
        <p className="text-xs font-semibold text-center mt-1" style={{ color: c }}>
          {label}
        </p>
      )}
    </div>
  )
}

// ─── Revenue Movement Chart ───────────────────────────────────────────────────
function RevenueMovementChart({ results }) {
  const { startingMRR, lostMRR, expansionMRR, endingMRR, hasExpansionData } = results

  const chartData = [
    { name: 'Starting MRR', value: startingMRR, fill: '#3b82f6' },
    { name: 'Lost MRR',     value: lostMRR,     fill: '#ef4444' },
    ...(hasExpansionData && expansionMRR !== null
      ? [{ name: 'Expansion MRR', value: expansionMRR, fill: '#10b981' }]
      : []),
    { name: 'Ending MRR', value: endingMRR, fill: '#059669' },
  ]

  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props
    return <rect x={x} y={y} width={width} height={height} fill={fill} rx={4} />
  }

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null
    const d = payload[0]
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-sm">
        <p className="font-medium text-gray-900 dark:text-white">{d.payload.name}</p>
        <p className="text-gray-600 dark:text-gray-300">{formatCurrency(d.value, false)}</p>
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 10, fill: '#9ca3af' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 10, fill: '#9ca3af' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={v => formatCurrency(v, true)}
          width={52}
        />
        <RechartTooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
        <Bar dataKey="value" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  )
}

// ─── Churn Forecast Chart ─────────────────────────────────────────────────────
function ChurnForecastChart({ results }) {
  const currentRate = results.customerChurnRate || 0
  const [improvedRate, setImprovedRate] = useState(
    Math.max(currentRate * 0.5, 0.005)
  )

  const data = forecastComparison(
    results.customersStart,
    results.startingMRR,
    currentRate,
    improvedRate,
    12,
  )

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-xs">
        <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>{p.name}: {formatCurrency(p.value, true)}</p>
        ))}
      </div>
    )
  }

  const mrrDiff = data.mrrDifference
  const annualDiff = data.annualRevenueDifference

  return (
    <div className="space-y-4">
      {/* Slider control */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Improved churn rate target
          </label>
          <span className="text-sm font-bold text-brand-500 tabular-nums">
            {formatPercent(improvedRate)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={Math.max(currentRate * 0.99, 0.001)}
          step={0.001}
          value={improvedRate}
          onChange={e => setImprovedRate(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0%</span>
          <span>Current: {formatPercent(currentRate)}</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data.combined} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: '#9ca3af' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => formatCurrency(v, true)}
            width={52}
          />
          <RechartTooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
          <Line
            type="monotone"
            dataKey="currentMRR"
            name="Current Churn"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            strokeDasharray="4 2"
          />
          <Line
            type="monotone"
            dataKey="improvedMRR"
            name="Improved Churn"
            stroke="#10b981"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* MRR uplift callout */}
      {mrrDiff > 0 && (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20">
          <TrendingUp size={18} className="text-brand-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
              +{formatCurrency(mrrDiff)} more MRR at month 12
            </p>
            <p className="text-xs text-brand-600/70 dark:text-brand-400/70">
              Equivalent to {formatCurrency(annualDiff)} in annualized revenue
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Retention Curve Chart ────────────────────────────────────────────────────
function RetentionCurveChart({ churnRate }) {
  const data = generateRetentionCurve(churnRate, 12)

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-xs">
        <p className="font-medium text-gray-700 dark:text-gray-300">{payload[0]?.payload?.label}</p>
        <p className="text-brand-500">{payload[0]?.value?.toFixed(1)}% retained</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 10, fill: '#9ca3af' }}
            axisLine={false}
            tickLine={false}
            domain={[0, 100]}
            tickFormatter={v => `${v}%`}
            width={36}
          />
          <RechartTooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="retention"
            stroke="#10b981"
            strokeWidth={2.5}
            fill="url(#retentionGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center italic">
        Projected from your churn rate — not actual cohort data
      </p>
    </div>
  )
}

// ─── Benchmark Card ───────────────────────────────────────────────────────────
function BenchmarkCard({ metric, value, status, text }) {
  const statusConfig = {
    above:   { icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10', border: 'border-emerald-100 dark:border-emerald-500/20', label: 'Above Benchmark' },
    average: { icon: Minus,       color: 'text-blue-500',    bg: 'bg-blue-50 dark:bg-blue-500/10',        border: 'border-blue-100 dark:border-blue-500/20',        label: 'On Benchmark' },
    below:   { icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10',      border: 'border-amber-100 dark:border-amber-500/20',      label: 'Below Benchmark' },
  }
  const cfg = statusConfig[status] || statusConfig.average
  const Icon = cfg.icon

  return (
    <div className={`rounded-xl p-4 border ${cfg.bg} ${cfg.border}`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`${cfg.color} mt-0.5 flex-shrink-0`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{metric}</p>
            <span className={`text-sm font-bold tabular-nums ${cfg.color}`}>{value}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Insight Item ─────────────────────────────────────────────────────────────
function InsightItem({ type, title, text }) {
  const config = {
    success: { border: 'border-l-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/20', icon: CheckCircle, color: 'text-emerald-500' },
    info:    { border: 'border-l-blue-400',    bg: 'bg-blue-50 dark:bg-blue-950/20',    icon: Info,         color: 'text-blue-500' },
    warning: { border: 'border-l-amber-500',   bg: 'bg-amber-50 dark:bg-amber-950/20',  icon: AlertTriangle, color: 'text-amber-500' },
    danger:  { border: 'border-l-red-500',     bg: 'bg-red-50 dark:bg-red-950/20',      icon: AlertTriangle, color: 'text-red-500' },
  }
  const cfg = config[type] || config.info
  const Icon = cfg.icon

  return (
    <div className={`rounded-xl p-4 border-l-4 ${cfg.border} ${cfg.bg}`}>
      <div className="flex items-start gap-2.5">
        <Icon size={16} className={`${cfg.color} mt-0.5 flex-shrink-0`} />
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Recommendation Card ──────────────────────────────────────────────────────
function RecommendationCard({ category, text, icon }) {
  return (
    <div className="rounded-xl p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-700 transition-colors">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mt-0.5">
          <DynamicIcon name={icon} size={15} className="text-brand-500" />
        </div>
        <div>
          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-100 dark:bg-brand-500/20 text-brand-700 dark:text-brand-300 mb-1.5">
            {category}
          </span>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Lead Capture Modal ───────────────────────────────────────────────────────
export function LeadCaptureModal({ onSubmit, results }) {
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
  const [error, setError]   = useState('')

  const health = getRetentionHealthScore(results)
  const churnHealth = results.customerChurnRate !== null
    ? getCustomerChurnHealth(results.customerChurnRate)
    : null

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) { setError('Please enter your name.'); return }
    if (!email.trim() || !email.includes('@')) { setError('Please enter a valid email.'); return }
    setError('')
    onSubmit({ name: name.trim(), email: email.trim() })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-brand-500 to-brand-700 px-6 pt-6 pb-8 text-white relative">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
            <Activity size={20} className="text-white" />
          </div>
          <h2 className="text-lg font-bold mb-1">Your churn analysis is ready</h2>
          <p className="text-brand-100 text-sm leading-snug">
            Unlock the full report — forecasts, benchmarks, and recommendations.
          </p>

          {/* Health score pill */}
          {health && (
            <div className="absolute top-5 right-5 flex flex-col items-end gap-1">
              <div className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold tabular-nums">
                {health.score}/100
              </div>
              <p className="text-brand-200 text-[10px] font-medium">{health.label}</p>
            </div>
          )}
        </div>

        {/* Teaser metrics */}
        <div className="px-6 -mt-4">
          <div className="grid grid-cols-2 gap-2">
            {results.customerChurnRate !== null && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700 shadow-sm">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Customer Churn</p>
                <p className="text-base font-bold text-gray-900 dark:text-white tabular-nums">
                  {formatPercent(results.customerChurnRate)}
                </p>
                {churnHealth && <HealthBadge label={churnHealth.label} color={churnHealth.color} />}
              </div>
            )}
            {results.grr !== null && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700 shadow-sm">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Gross Retention</p>
                <p className="text-base font-bold text-gray-900 dark:text-white tabular-nums">
                  {formatPercent(results.grr)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3">
          <div>
            <label className="label">Your name</label>
            <input
              type="text"
              value={name}
              onChange={e => { setName(e.target.value); setError('') }}
              placeholder="Jane Smith"
              className="input-field"
            />
          </div>
          <div>
            <label className="label">Work email</label>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              placeholder="you@company.com"
              className="input-field"
            />
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}

          <button type="submit" className="btn-primary w-full mt-1">
            Unlock full churn report
            <ChevronRight size={16} />
          </button>

          <p className="text-center text-xs text-gray-400 dark:text-gray-500 pt-1">
            No spam. Your data stays private.
          </p>
        </form>
      </div>
    </motion.div>
  )
}

// ─── Partial Results Preview (blurred background) ─────────────────────────────
export function ResultsPreview({ results }) {
  const health = getRetentionHealthScore(results)

  return (
    <div className="space-y-4">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Retention Health</h2>
          {health && <HealthBadge label={health.label} color={health.color} />}
        </div>
        <div className="flex justify-center mb-4">
          <RetentionHealthGauge
            score={health?.score ?? null}
            label={health?.label}
            color={health?.color ?? 'emerald'}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          label="Customer Churn"
          value={formatPercent(results.customerChurnRate)}
          health={getCustomerChurnHealth(results.customerChurnRate)}
        />
        <MetricCard
          label="Revenue Churn"
          value={formatPercent(results.revenueChurnRate)}
          health={getRevenueChurnHealth(results.revenueChurnRate)}
        />
        <MetricCard
          label="Gross Retention"
          value={formatPercent(results.grr)}
          health={getGRRHealth(results.grr)}
        />
        <MetricCard
          label="Net Retention"
          value={results.nrr !== null ? formatPercent(results.nrr) : '—'}
          health={getNRRHealth(results.nrr)}
        />
      </div>

      <div className="card p-5 h-36 flex items-center justify-center">
        <div className="text-center text-gray-300 dark:text-gray-700">
          <Lock size={28} className="mx-auto mb-2" />
          <p className="text-sm font-medium">Forecasts & Recommendations Locked</p>
        </div>
      </div>
    </div>
  )
}

// ─── Full Results Dashboard ───────────────────────────────────────────────────
export function FullResultsDashboard({ results, leadData, onReset, onEditInputs }) {
  const [activeTab, setActiveTab] = useState('overview')

  const health       = getRetentionHealthScore(results)
  const { insights, recommendations } = generateInsights(results)
  const benchmarks   = getBenchmarkComparisons(results)

  const tabs = [
    { id: 'overview',    label: 'Overview',        icon: Activity },
    { id: 'revenue',     label: 'Revenue Impact',  icon: DollarSign },
    { id: 'forecast',    label: 'Forecast',        icon: TrendingDown },
    { id: 'benchmarks',  label: 'Benchmarks',      icon: BarChart2 },
    { id: 'actions',     label: 'Recommendations', icon: Lightbulb },
  ]

  return (
    <div className="space-y-5">
      {/* Success banner */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 rounded-2xl bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
            <CheckCircle size={16} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
              {leadData?.name ? `${leadData.name.split(' ')[0]}, your report is ready.` : 'Your report is ready.'}
            </p>
            <p className="text-xs text-brand-600/70 dark:text-brand-400/70">
              {formatPeriod(results.period)} churn analysis — {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onEditInputs} className="btn-ghost text-xs hidden sm:flex">
            <ArrowLeft size={13} />
            Edit
          </button>
          <button onClick={onReset} className="btn-ghost text-xs">
            <RefreshCw size={13} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </motion.div>

      {/* Tab bar */}
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {/* ── OVERVIEW ── */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Health gauge card */}
              <div className="card p-5">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
                      Retention Health Score
                    </p>
                    <RetentionHealthGauge
                      score={health?.score ?? null}
                      label={health?.label}
                      color={health?.color ?? 'emerald'}
                    />
                  </div>
                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Period analyzed</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">
                        {formatPeriod(results.period)} churn
                        {results.customersStart > 0 && ` · ${formatNumber(results.customersStart)} starting customers`}
                      </p>
                    </div>
                    {results.customerLifetime !== null && (
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Avg customer lifetime</p>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white">
                          {formatMonths(results.customerLifetime)}
                        </p>
                      </div>
                    )}
                    {results.revenueAtRisk !== null && (
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Annualized revenue at risk</p>
                        <p className="text-sm font-bold text-red-500">
                          {formatCurrency(results.revenueAtRisk)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 4 primary metric cards */}
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  label="Customer Churn"
                  value={formatPercent(results.customerChurnRate)}
                  subvalue={`${formatNumber(results.customersLost)} customers lost`}
                  health={getCustomerChurnHealth(results.customerChurnRate)}
                  icon={Users}
                  tooltip="Percentage of customers who churned during this period."
                />
                <MetricCard
                  label="Revenue Churn"
                  value={formatPercent(results.revenueChurnRate)}
                  subvalue={`${formatCurrency(results.lostMRR)} lost`}
                  health={getRevenueChurnHealth(results.revenueChurnRate)}
                  icon={DollarSign}
                  tooltip="Percentage of MRR lost from churned and downgraded customers."
                />
                <MetricCard
                  label="Gross Retention"
                  value={formatPercent(results.grr)}
                  subvalue="Revenue retained before expansion"
                  health={getGRRHealth(results.grr)}
                  icon={Activity}
                  tooltip="GRR: starting MRR minus lost MRR, divided by starting MRR. Capped at 100%."
                />
                <MetricCard
                  label="Net Retention"
                  value={results.nrr !== null ? formatPercent(results.nrr) : '—'}
                  subvalue={results.nrr !== null ? 'Including expansion MRR' : 'Add expansion data to unlock'}
                  health={getNRRHealth(results.nrr)}
                  icon={TrendingUp}
                  tooltip="NRR: starting MRR minus lost MRR plus expansion MRR, divided by starting MRR."
                />
              </div>

              {/* Top 2 insights */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key insights</p>
                {insights.slice(0, 2).map((ins, i) => (
                  <InsightItem key={i} {...ins} />
                ))}
              </div>
            </div>
          )}

          {/* ── REVENUE IMPACT ── */}
          {activeTab === 'revenue' && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  label="Gross Retention"
                  value={formatPercent(results.grr)}
                  health={getGRRHealth(results.grr)}
                  icon={Activity}
                  tooltip="Revenue retained, ignoring expansion."
                />
                <MetricCard
                  label="Net Retention"
                  value={results.nrr !== null ? formatPercent(results.nrr) : '—'}
                  health={getNRRHealth(results.nrr)}
                  icon={TrendingUp}
                  tooltip="Revenue retained including expansion."
                />
                {results.netRevenueChurn !== null && (
                  <MetricCard
                    label="Net Revenue Churn"
                    value={formatPercent(results.netRevenueChurn)}
                    subvalue={results.netRevenueChurn < 0 ? 'Negative churn (good!)' : 'Revenue base contracting'}
                    icon={TrendingDown}
                    tooltip="(Lost MRR − Expansion MRR) / Starting MRR. Negative means expansion outpaces churn."
                  />
                )}
                {results.revenueAtRisk !== null && (
                  <MetricCard
                    label="Annualized Revenue at Risk"
                    value={formatCurrency(results.revenueAtRisk)}
                    subvalue="Based on current churn rate"
                    icon={AlertTriangle}
                    tooltip="Lost MRR annualized — the total revenue you'll lose in 12 months at this rate."
                  />
                )}
                {results.endingMRR !== null && (
                  <MetricCard
                    label="Ending MRR"
                    value={formatCurrency(results.endingMRR)}
                    subvalue="After churn, expansion & new"
                    icon={DollarSign}
                    highlight={results.endingMRR > results.startingMRR}
                  />
                )}
                {results.ltv !== null && (
                  <MetricCard
                    label="Customer LTV"
                    value={formatCurrency(results.ltv)}
                    subvalue="ARPU × avg customer lifetime"
                    icon={Target}
                  />
                )}
                {results.ltvCacRatio !== null && (
                  <MetricCard
                    label="LTV / CAC"
                    value={formatMultiple(results.ltvCacRatio)}
                    subvalue={results.ltvCacRatio >= 3 ? 'Healthy unit economics' : 'Payback period may be long'}
                    health={
                      results.ltvCacRatio >= 5 ? { label: 'Strong', color: 'emerald' } :
                      results.ltvCacRatio >= 3 ? { label: 'OK', color: 'green' } :
                      { label: 'Improve', color: 'amber' }
                    }
                    icon={BarChart2}
                  />
                )}
              </div>

              {/* Revenue movement chart */}
              <div className="card p-5">
                <SectionHeader
                  title="MRR Movement"
                  subtitle="Revenue flow for the analyzed period"
                  icon={BarChart2}
                />
                <RevenueMovementChart results={results} />
              </div>
            </div>
          )}

          {/* ── FORECAST ── */}
          {activeTab === 'forecast' && (
            <div className="space-y-5">
              {results.customerChurnRate !== null && results.customerChurnRate > 0 ? (
                <>
                  {/* Forecast chart */}
                  <div className="card p-5">
                    <SectionHeader
                      title="12-Month MRR Forecast"
                      subtitle="Compare current churn vs. an improved target"
                      icon={TrendingDown}
                    />
                    <ChurnForecastChart results={results} />
                  </div>

                  {/* Retention curve */}
                  <div className="card p-5">
                    <SectionHeader
                      title="Cohort Retention Curve"
                      subtitle="Projected customer retention over 12 months"
                      icon={Activity}
                    />
                    <RetentionCurveChart churnRate={results.customerChurnRate} />
                  </div>

                  {/* Customer lifetime stats */}
                  <div className="card p-5">
                    <SectionHeader title="Customer Lifetime" icon={Users} />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg Lifetime</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                          {formatMonths(results.customerLifetime)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">12-mo Retention</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                          {formatPercent(Math.pow(1 - (results.customerChurnRate || 0), 12), 1)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Annual Churn</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                          {formatPercent(1 - Math.pow(1 - (results.customerChurnRate || 0), 12), 1)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="card p-8">
                  <EmptyState
                    icon={TrendingDown}
                    title="No churn rate to forecast"
                    description="Enter your customer churn data in steps 1–2 to see a 12-month forecast."
                  />
                </div>
              )}
            </div>
          )}

          {/* ── BENCHMARKS ── */}
          {activeTab === 'benchmarks' && (
            <div className="space-y-4">
              <InfoAlert variant="info">
                Benchmarks are based on typical SaaS metrics across B2B products. Ranges vary by
                segment, ACV, and maturity — use these as directional guidance, not hard targets.
              </InfoAlert>

              {benchmarks.length > 0 ? (
                <div className="space-y-3">
                  {benchmarks.map((b, i) => (
                    <BenchmarkCard key={i} {...b} />
                  ))}
                </div>
              ) : (
                <div className="card p-8">
                  <EmptyState
                    icon={BarChart2}
                    title="Complete more steps for benchmarks"
                    description="Enter customer and revenue data to see how your metrics compare to industry benchmarks."
                  />
                </div>
              )}

              {/* Reference table */}
              <div className="card p-4 mt-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">SaaS Benchmark Reference</p>
                <div className="space-y-2 text-xs">
                  {[
                    ['Customer Churn (monthly)', '< 2% Excellent', '2–5% Healthy', '> 5% Risky'],
                    ['Revenue Churn (monthly)',   '< 1% Excellent', '1–3% Healthy', '> 3% Risky'],
                    ['GRR (monthly)',             '> 90% Strong',   '80–90% OK',    '< 80% Weak'],
                    ['NRR (monthly)',             '> 120% Elite',   '100–120% Good', '< 100% Contraction'],
                    ['LTV / CAC',                 '> 5× Strong',    '3–5× OK',      '< 3× Improve'],
                  ].map(([metric, good, ok, bad], i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-gray-700 dark:text-gray-300 font-medium col-span-1 truncate">{metric}</span>
                      <span className="text-emerald-600 dark:text-emerald-400">{good}</span>
                      <span className="text-blue-600 dark:text-blue-400">{ok}</span>
                      <span className="text-red-500">{bad}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── RECOMMENDATIONS ── */}
          {activeTab === 'actions' && (
            <div className="space-y-5">
              {/* All insights */}
              {insights.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Analysis Insights</p>
                  <div className="space-y-2">
                    {insights.map((ins, i) => (
                      <InsightItem key={i} {...ins} />
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {recommendations.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action Plan</p>
                  <div className="space-y-2">
                    {recommendations.map((rec, i) => (
                      <RecommendationCard key={i} {...rec} />
                    ))}
                  </div>
                </div>
              )}

              {insights.length === 0 && recommendations.length === 0 && (
                <div className="card p-8">
                  <EmptyState
                    icon={Lightbulb}
                    title="Complete the wizard to get recommendations"
                    description="Fill in steps 1–2 and we'll generate tailored insights and an action plan."
                  />
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
