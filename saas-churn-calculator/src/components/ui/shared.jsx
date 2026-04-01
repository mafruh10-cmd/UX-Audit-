import React, { useState, useRef, useEffect } from 'react'
import { Moon, Sun, Info, ChevronRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Dark Mode Toggle ─────────────────────────────────────────────────────────
export function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex items-center justify-center w-10 h-10 rounded-xl
                 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
                 text-gray-600 dark:text-gray-300 transition-all duration-200"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

// ─── Step Progress ─────────────────────────────────────────────────────────────
export function StepProgress({ currentStep, totalSteps, labels }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < currentStep
          const isCurrent   = stepNum === currentStep
          return (
            <React.Fragment key={stepNum}>
              <div className="flex flex-col items-center gap-1.5 min-w-0">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold
                    transition-all duration-300
                    ${isCompleted
                      ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                      : isCurrent
                      ? 'bg-white dark:bg-gray-900 border-2 border-brand-500 text-brand-500 shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    }`}
                >
                  {isCompleted ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : stepNum}
                </div>
                {labels && (
                  <span className={`hidden sm:block text-xs font-medium truncate max-w-[72px] text-center
                    ${isCurrent ? 'text-brand-500' : isCompleted ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-600'}`}>
                    {labels[i]}
                  </span>
                )}
              </div>
              {i < totalSteps - 1 && (
                <div className="flex-1 mx-2 h-0.5 mb-5 sm:mb-7">
                  <div className={`h-full rounded-full transition-all duration-500
                    ${stepNum < currentStep ? 'bg-brand-500' : 'bg-gray-200 dark:bg-gray-700'}`} />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
export function Tooltip({ content, children }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setVisible(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <span ref={ref} className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="text-gray-400 hover:text-brand-500 transition-colors"
        aria-label="More information"
      >
        {children || <Info size={14} />}
      </button>
      {visible && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2
                         w-60 p-2.5 rounded-lg text-xs leading-relaxed
                         bg-gray-900 dark:bg-gray-700 text-gray-100
                         shadow-xl pointer-events-none">
          {content}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
        </span>
      )}
    </span>
  )
}

// ─── Field Label ──────────────────────────────────────────────────────────────
export function FieldLabel({ label, tooltip, required }) {
  return (
    <div className="flex items-center gap-1.5 mb-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {tooltip && <Tooltip content={tooltip} />}
    </div>
  )
}

// ─── Number Input ─────────────────────────────────────────────────────────────
export function NumberInput({ label, tooltip, value, onChange, placeholder, prefix, suffix, min, max, step, helper, error, required }) {
  return (
    <div>
      <FieldLabel label={label} tooltip={tooltip} required={required} />
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value === '' ? '' : value}
          onChange={e => {
            const v = e.target.value
            onChange(v === '' ? '' : v)
          }}
          placeholder={placeholder || '0'}
          min={min}
          max={max}
          step={step || 'any'}
          className={`input-field no-spinner ${prefix ? 'pl-7' : ''} ${suffix ? 'pr-10' : ''} ${
            error ? 'border-red-400 dark:border-red-600 focus:ring-red-400' : ''
          }`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none select-none">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      {!error && helper && <p className="helper-text">{helper}</p>}
    </div>
  )
}

// ─── Select Field ─────────────────────────────────────────────────────────────
export function SelectField({ label, tooltip, value, onChange, options, helper, required }) {
  return (
    <div>
      <FieldLabel label={label} tooltip={tooltip} required={required} />
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="input-field appearance-none pr-10 cursor-pointer"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
      {helper && <p className="helper-text">{helper}</p>}
    </div>
  )
}

// ─── Info Alert ───────────────────────────────────────────────────────────────
export function InfoAlert({ children, variant = 'info' }) {
  const styles = {
    info:    'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300',
    warning: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300',
    success: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300',
    danger:  'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900 text-red-800 dark:text-red-300',
  }
  return (
    <div className={`rounded-xl p-3 border text-sm leading-relaxed ${styles[variant] || styles.info}`}>
      {children}
    </div>
  )
}

// ─── Step Header ──────────────────────────────────────────────────────────────
export function StepHeader({ step, title, description, badge }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold flex-shrink-0">
          {step}
        </span>
        <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
          Step {step}
        </p>
        {badge && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            {badge}
          </span>
        )}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
    </div>
  )
}

// ─── Health Badge ─────────────────────────────────────────────────────────────
export function HealthBadge({ label, color, size = 'sm' }) {
  const colorMap = {
    emerald: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
    green:   'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400',
    amber:   'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400',
    red:     'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400',
    blue:    'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400',
    gray:    'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  }
  const dotMap = {
    emerald: 'bg-emerald-500',
    green:   'bg-green-500',
    amber:   'bg-amber-500',
    red:     'bg-red-500',
    blue:    'bg-blue-500',
    gray:    'bg-gray-400',
  }
  const cls = colorMap[color] || colorMap.gray
  const dot = dotMap[color] || dotMap.gray
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      {label}
    </span>
  )
}

// ─── Metric Card ──────────────────────────────────────────────────────────────
export function MetricCard({ label, value, subvalue, health, tooltip, icon: Icon, size = 'sm', highlight }) {
  return (
    <div className={`rounded-xl p-4 border transition-all ${
      highlight
        ? 'bg-brand-500 border-brand-400'
        : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
    }`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <p className={`text-xs font-medium truncate ${highlight ? 'text-brand-100' : 'text-gray-500 dark:text-gray-400'}`}>
            {label}
          </p>
          {tooltip && (
            <Tooltip content={tooltip}>
              <Info size={11} className={highlight ? 'text-brand-200' : 'text-gray-400'} />
            </Tooltip>
          )}
        </div>
        {Icon && (
          <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center ${
            highlight ? 'bg-white/20' : 'bg-brand-50 dark:bg-brand-500/10'
          }`}>
            <Icon size={14} className={highlight ? 'text-white' : 'text-brand-500'} />
          </div>
        )}
      </div>
      <p className={`font-bold tabular-nums ${size === 'lg' ? 'text-3xl' : 'text-2xl'} ${
        highlight ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        {value}
      </p>
      {subvalue && (
        <p className={`text-xs mt-1 ${highlight ? 'text-brand-100' : 'text-gray-500 dark:text-gray-400'}`}>
          {subvalue}
        </p>
      )}
      {health && !highlight && (
        <div className="mt-2">
          <HealthBadge label={health.label} color={health.color} />
        </div>
      )}
    </div>
  )
}

// ─── Tab Bar ──────────────────────────────────────────────────────────────────
export function TabBar({ tabs, active, onChange }) {
  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl overflow-x-auto scrollbar-hide">
      {tabs.map(tab => {
        const Icon = tab.icon
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-white dark:bg-gray-900 text-brand-600 dark:text-brand-400 shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            {Icon && <Icon size={14} />}
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

// ─── Section Header ──────────────────────────────────────────────────────────
export function SectionHeader({ title, subtitle, icon: Icon }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
            <Icon size={14} className="text-brand-500" />
          </div>
        )}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-9">{subtitle}</p>}
    </div>
  )
}

// ─── Empty State ──────────────────────────────────────────────────────────────
export function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {Icon && (
        <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3">
          <Icon size={22} className="text-gray-400" />
        </div>
      )}
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
      {description && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs">{description}</p>}
    </div>
  )
}
