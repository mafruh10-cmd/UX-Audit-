import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  StepHeader,
  NumberInput,
  SelectField,
  InfoAlert,
  HealthBadge,
} from './ui/shared.jsx'
import {
  calculateCustomerChurnRate,
  calculateRevenueChurnRate,
  calculateGRR,
  calculateNRR,
} from '../lib/churnEngine.js'
import { getCustomerChurnHealth, getGRRHealth, getNRRHealth, getRevenueChurnHealth } from '../lib/benchmarkEngine.js'
import { formatPercent } from '../lib/formatters.js'

// ─── Animated Step Wrapper ────────────────────────────────────────────────────
export function AnimatedStep({ stepKey, direction, children }) {
  return (
    <motion.div
      key={stepKey}
      custom={direction}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// ─── Step 1: Customer Churn ───────────────────────────────────────────────────
export function Step1Customers({ data, onChange, errors }) {
  const csNum = Number(data.customersStart) || 0
  const clNum = Number(data.customersLost) || 0
  const showPreview = csNum > 0 && clNum >= 0

  const rate = showPreview ? calculateCustomerChurnRate(csNum, clNum) : null
  const health = rate !== null ? getCustomerChurnHealth(rate) : null

  return (
    <div>
      <StepHeader
        step={1}
        title="Customer Churn"
        description="Enter your customer counts for the period you want to analyze."
      />

      <div className="space-y-5">
        <NumberInput
          label="Customers at Start of Period"
          value={data.customersStart}
          onChange={v => onChange('customersStart', v)}
          placeholder="e.g. 500"
          min={0}
          step={1}
          helper="Active paying customers at the beginning of the month or selected period."
          error={errors?.customersStart}
          required
        />

        <NumberInput
          label="Customers Lost"
          value={data.customersLost}
          onChange={v => onChange('customersLost', v)}
          placeholder="e.g. 20"
          min={0}
          step={1}
          helper="Churned customers during the same period."
          error={errors?.customersLost}
          required
        />

        {/* Live preview */}
        {showPreview && rate !== null && health && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700"
          >
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Customer Churn Rate</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                {formatPercent(rate)}
              </p>
            </div>
            <HealthBadge label={health.label} color={health.color} />
          </motion.div>
        )}

        <InfoAlert variant="info">
          Use the number of active paying customers at the beginning of the month or selected period.
          Do not include trial users or free plan accounts unless they are revenue-generating.
        </InfoAlert>
      </div>
    </div>
  )
}

// ─── Step 2: Revenue Churn ────────────────────────────────────────────────────
export function Step2Revenue({ data, onChange, errors }) {
  const mrrNum  = Number(data.startingMRR) || 0
  const lostNum = Number(data.lostMRR) || 0
  const showPreview = mrrNum > 0 && lostNum >= 0

  const revRate = showPreview ? calculateRevenueChurnRate(mrrNum, lostNum) : null
  const grr     = showPreview ? calculateGRR(mrrNum, lostNum) : null
  const revHealth = revRate !== null ? getRevenueChurnHealth(revRate) : null
  const grrHealth = grr !== null ? getGRRHealth(grr) : null

  return (
    <div>
      <StepHeader
        step={2}
        title="Revenue Churn"
        description="Enter your MRR figures to calculate revenue retention."
      />

      <div className="space-y-5">
        <NumberInput
          label="Starting MRR"
          value={data.startingMRR}
          onChange={v => onChange('startingMRR', v)}
          placeholder="e.g. 50000"
          prefix="$"
          min={0}
          tooltip="Monthly Recurring Revenue from active subscriptions before churn in this period."
          error={errors?.startingMRR}
          required
        />

        <NumberInput
          label="Lost MRR"
          value={data.lostMRR}
          onChange={v => onChange('lostMRR', v)}
          placeholder="e.g. 2000"
          prefix="$"
          min={0}
          tooltip="Revenue lost from churned or downgraded customers during this period."
          error={errors?.lostMRR}
          required
        />

        {/* Live preview */}
        {showPreview && (revRate !== null || grr !== null) && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            {revRate !== null && revHealth && (
              <div className="rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Revenue Churn</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                  {formatPercent(revRate)}
                </p>
                <div className="mt-1">
                  <HealthBadge label={revHealth.label} color={revHealth.color} />
                </div>
              </div>
            )}
            {grr !== null && grrHealth && (
              <div className="rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Gross Retention</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                  {formatPercent(grr)}
                </p>
                <div className="mt-1">
                  <HealthBadge label={grrHealth.label} color={grrHealth.color} />
                </div>
              </div>
            )}
          </motion.div>
        )}

        <InfoAlert variant="info">
          MRR lost from downgrades counts here too — not just full cancellations. If a customer drops
          from the $200/mo to the $100/mo plan, that's $100 of lost MRR.
        </InfoAlert>
      </div>
    </div>
  )
}

// ─── Step 3: Expansion (Optional) ─────────────────────────────────────────────
export function Step3Expansion({ data, onChange }) {
  const mrrNum      = Number(data.startingMRR) || 0
  const lostNum     = Number(data.lostMRR) || 0
  const expansionNum = data.expansionMRR !== '' && data.expansionMRR !== undefined
    ? Number(data.expansionMRR)
    : null
  const showNRR = expansionNum !== null && mrrNum > 0

  const nrr = showNRR ? calculateNRR(mrrNum, lostNum, expansionNum) : null
  const nrrHealth = nrr !== null ? getNRRHealth(nrr) : null

  return (
    <div>
      <StepHeader
        step={3}
        title="Expansion & New Revenue"
        description="Add expansion data to unlock Net Revenue Retention."
        badge="Optional"
      />

      <div className="space-y-5">
        <InfoAlert variant="info">
          These inputs unlock NRR and expansion analysis. Skip this step if you don't have the
          data yet — you can always come back.
        </InfoAlert>

        <NumberInput
          label="Expansion MRR"
          value={data.expansionMRR}
          onChange={v => onChange('expansionMRR', v)}
          placeholder="e.g. 3500"
          prefix="$"
          min={0}
          helper="Revenue from upgrades, upsells, or seat expansion from existing customers."
        />

        <NumberInput
          label="New Customers Added"
          value={data.newCustomers}
          onChange={v => onChange('newCustomers', v)}
          placeholder="e.g. 45"
          min={0}
          step={1}
          helper="Customers acquired during this period (not needed for churn, but helps with net customer flow)."
        />

        <NumberInput
          label="New MRR from New Customers"
          value={data.newMRR}
          onChange={v => onChange('newMRR', v)}
          placeholder="e.g. 8000"
          prefix="$"
          min={0}
          helper="MRR generated by new customers acquired this period."
        />

        {/* NRR preview */}
        {showNRR && nrr !== null && nrrHealth && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700"
          >
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Net Revenue Retention</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">
                {formatPercent(nrr)}
              </p>
            </div>
            <HealthBadge label={nrrHealth.label} color={nrrHealth.color} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ─── Step 4: Advanced (Optional) ──────────────────────────────────────────────
export function Step4Advanced({ data, onChange }) {
  const periodOptions = [
    { value: 'monthly',   label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly',    label: 'Yearly' },
  ]

  return (
    <div>
      <StepHeader
        step={4}
        title="Advanced Metrics"
        description="LTV, CAC, and additional context for a richer analysis."
        badge="Optional"
      />

      <div className="space-y-5">
        <InfoAlert variant="info">
          Advanced metrics improve the depth of your analysis but are not required for a full
          churn report. Skip freely if you don't have these numbers.
        </InfoAlert>

        <NumberInput
          label="ARPU (Avg Revenue Per User)"
          value={data.arpu}
          onChange={v => onChange('arpu', v)}
          placeholder="e.g. 120"
          prefix="$"
          min={0}
          tooltip="Average monthly revenue per paying customer. Used to calculate LTV when a direct LTV is not provided."
        />

        <NumberInput
          label="CAC (Customer Acquisition Cost)"
          value={data.cac}
          onChange={v => onChange('cac', v)}
          placeholder="e.g. 800"
          prefix="$"
          min={0}
          tooltip="Average fully-loaded cost to acquire one new customer. Used to compute the LTV/CAC ratio."
        />

        <NumberInput
          label="LTV (Customer Lifetime Value)"
          value={data.ltv}
          onChange={v => onChange('ltv', v)}
          placeholder="e.g. 2400"
          prefix="$"
          min={0}
          helper="If you already know your LTV, enter it here. Otherwise we calculate it from ARPU × Lifetime."
        />

        <NumberInput
          label="Known NRR"
          value={data.nrr}
          onChange={v => onChange('nrr', v)}
          placeholder="e.g. 108"
          suffix="%"
          min={0}
          max={300}
          tooltip="Net Revenue Retention — if you already track this metric, enter it here to override the calculated value."
          helper="Enter as a number, e.g. 108 for 108%. Leave blank to auto-calculate from expansion data."
        />

        <SelectField
          label="Churn Period"
          value={data.period}
          onChange={v => onChange('period', v)}
          options={periodOptions}
          helper="The time period these numbers represent. Affects revenue at risk calculations."
        />
      </div>
    </div>
  )
}
