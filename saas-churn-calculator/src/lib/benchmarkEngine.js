/**
 * benchmarkEngine.js
 * Health classifications and benchmark comparison logic.
 */

// ─── Health Classifications ────────────────────────────────────────────────────

/**
 * Classify customer churn rate health.
 * @param {number|null} rate decimal (0.05 = 5%)
 */
export function getCustomerChurnHealth(rate) {
  if (rate === null || rate === undefined) return null
  if (rate < 0.02) return { label: 'Excellent',  color: 'emerald', score: 100, description: 'Below 2% — top-tier retention' }
  if (rate < 0.05) return { label: 'Healthy',    color: 'green',   score: 75,  description: '2–5% — solid SaaS range' }
  if (rate < 0.08) return { label: 'Risky',      color: 'amber',   score: 40,  description: '5–8% — above average, needs work' }
  return                  { label: 'Dangerous',  color: 'red',     score: 10,  description: 'Above 8% — urgent attention required' }
}

/**
 * Classify Net Revenue Retention health.
 * @param {number|null} nrr decimal (1.10 = 110%)
 */
export function getNRRHealth(nrr) {
  if (nrr === null || nrr === undefined) return null
  if (nrr >= 1.20) return { label: 'Elite',       color: 'emerald', score: 100, description: 'Above 120% — world-class expansion' }
  if (nrr >= 1.10) return { label: 'Strong',      color: 'green',   score: 85,  description: '110–120% — strong expansion motion' }
  if (nrr >= 1.00) return { label: 'Stable',      color: 'blue',    score: 65,  description: '100–110% — retention neutral or slightly positive' }
  return                  { label: 'Contraction', color: 'red',     score: 20,  description: 'Below 100% — revenue base is shrinking' }
}

/**
 * Classify Gross Revenue Retention health.
 * @param {number|null} grr decimal (0.90 = 90%)
 */
export function getGRRHealth(grr) {
  if (grr === null || grr === undefined) return null
  if (grr >= 0.90) return { label: 'Strong',   color: 'emerald', score: 100, description: 'Above 90% — excellent gross retention' }
  if (grr >= 0.80) return { label: 'Moderate', color: 'amber',   score: 55,  description: '80–90% — acceptable, room to improve' }
  return                  { label: 'Weak',     color: 'red',     score: 20,  description: 'Below 80% — high revenue leakage' }
}

/**
 * Classify revenue churn rate health.
 * @param {number|null} rate decimal
 */
export function getRevenueChurnHealth(rate) {
  if (rate === null || rate === undefined) return null
  if (rate < 0.01) return { label: 'Excellent', color: 'emerald', score: 100 }
  if (rate < 0.03) return { label: 'Healthy',   color: 'green',   score: 75  }
  if (rate < 0.06) return { label: 'Risky',     color: 'amber',   score: 40  }
  return                  { label: 'Dangerous', color: 'red',     score: 10  }
}

// ─── Overall Retention Health Score ───────────────────────────────────────────
/**
 * Compute a weighted retention health score (0–100) from available metrics.
 * @param {Object} metrics - { customerChurnRate, nrr, grr }
 * @returns {{ label, score, color, level, emoji }|null}
 */
export function getRetentionHealthScore(metrics) {
  const { customerChurnRate, nrr, grr } = metrics
  const churnH = getCustomerChurnHealth(customerChurnRate)
  const nrrH   = getNRRHealth(nrr)
  const grrH   = getGRRHealth(grr)

  const slots = []
  if (churnH) slots.push({ score: churnH.score, w: 0.4 })
  if (grrH)   slots.push({ score: grrH.score,   w: 0.3 })
  if (nrrH)   slots.push({ score: nrrH.score,   w: 0.3 })
  if (slots.length === 0) return null

  const totalW = slots.reduce((s, x) => s + x.w, 0)
  const weighted = slots.reduce((s, x) => s + x.score * x.w, 0)
  const score = Math.round(weighted / totalW)

  if (score >= 80) return { label: 'Excellent retention health', score, color: 'emerald', level: 'excellent', emoji: '🟢' }
  if (score >= 60) return { label: 'Good retention health',      score, color: 'green',   level: 'good',      emoji: '🟢' }
  if (score >= 35) return { label: 'Needs attention',            score, color: 'amber',   level: 'warning',   emoji: '🟡' }
  return                  { label: 'High churn risk',            score, color: 'red',     level: 'danger',    emoji: '🔴' }
}

// ─── Benchmark Comparisons ────────────────────────────────────────────────────
/**
 * Generate textual benchmark comparisons for display.
 * @param {Object} metrics
 * @returns {Array<{ metric, value, status, text }>}
 */
export function getBenchmarkComparisons(metrics) {
  const { customerChurnRate, nrr, grr, revenueChurnRate } = metrics
  const comps = []

  if (customerChurnRate !== null) {
    const pct = (customerChurnRate * 100).toFixed(1)
    if (customerChurnRate < 0.02)
      comps.push({ metric: 'Customer Churn', value: `${pct}%`, status: 'above', text: `Your ${pct}% customer churn beats the typical SaaS benchmark of 2–5%. This is excellent.` })
    else if (customerChurnRate < 0.05)
      comps.push({ metric: 'Customer Churn', value: `${pct}%`, status: 'average', text: `Your ${pct}% customer churn is within the typical SaaS range of 2–5%.` })
    else
      comps.push({ metric: 'Customer Churn', value: `${pct}%`, status: 'below', text: `Your ${pct}% customer churn is above the typical SaaS benchmark. Most healthy SaaS products stay below 5%.` })
  }

  if (grr !== null) {
    const pct = (grr * 100).toFixed(1)
    if (grr >= 0.90)
      comps.push({ metric: 'Gross Revenue Retention', value: `${pct}%`, status: 'above', text: `Your GRR of ${pct}% exceeds the 90% benchmark for strong SaaS products.` })
    else if (grr >= 0.80)
      comps.push({ metric: 'Gross Revenue Retention', value: `${pct}%`, status: 'average', text: `Your GRR of ${pct}% is moderate. Top SaaS companies typically achieve 90%+.` })
    else
      comps.push({ metric: 'Gross Revenue Retention', value: `${pct}%`, status: 'below', text: `Your GRR of ${pct}% is below the typical 80–90% range. Revenue leakage is a concern.` })
  }

  if (nrr !== null) {
    const pct = (nrr * 100).toFixed(1)
    if (nrr >= 1.20)
      comps.push({ metric: 'Net Revenue Retention', value: `${pct}%`, status: 'above', text: `Your NRR of ${pct}% is elite-level. Very few early-stage SaaS products achieve this.` })
    else if (nrr >= 1.00)
      comps.push({ metric: 'Net Revenue Retention', value: `${pct}%`, status: 'average', text: `Your NRR of ${pct}% is healthy. The best SaaS companies aim for 110–130%+.` })
    else
      comps.push({ metric: 'Net Revenue Retention', value: `${pct}%`, status: 'below', text: `Your NRR of ${pct}% is below 100%, meaning churn is outpacing expansion revenue.` })
  }

  if (revenueChurnRate !== null) {
    const pct = (revenueChurnRate * 100).toFixed(1)
    if (revenueChurnRate < 0.02)
      comps.push({ metric: 'Revenue Churn', value: `${pct}%`, status: 'above', text: `Your ${pct}% revenue churn is very low — consistent with best-in-class SaaS retention.` })
    else if (revenueChurnRate < 0.05)
      comps.push({ metric: 'Revenue Churn', value: `${pct}%`, status: 'average', text: `Your ${pct}% revenue churn is within the typical SaaS range.` })
    else
      comps.push({ metric: 'Revenue Churn', value: `${pct}%`, status: 'below', text: `Your ${pct}% revenue churn is above average. This represents significant annual revenue at risk.` })
  }

  return comps
}
