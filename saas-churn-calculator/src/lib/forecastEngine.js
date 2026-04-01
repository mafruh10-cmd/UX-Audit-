/**
 * forecastEngine.js
 * Projection and cohort retention modeling utilities.
 */

/**
 * Forecast customer base and MRR decline over N months at a given monthly churn rate.
 * @param {number} startCustomers
 * @param {number} startMRR
 * @param {number} monthlyChurnRate decimal
 * @param {number} months
 * @returns {Array<{ month, customers, mrr, label }>}
 */
export function forecastRetention(startCustomers, startMRR, monthlyChurnRate, months = 12) {
  const data = []
  let customers = startCustomers || 0
  let mrr = startMRR || 0
  const rate = Math.min(Math.max(monthlyChurnRate || 0, 0), 1)

  for (let i = 0; i <= months; i++) {
    data.push({
      month: i,
      customers: Math.round(customers),
      mrr: Math.round(mrr),
      label: i === 0 ? 'Now' : `M${i}`,
    })
    customers = customers * (1 - rate)
    mrr = mrr * (1 - rate)
  }
  return data
}

/**
 * Compare current vs improved churn rate projections over N months.
 * @param {number} startCustomers
 * @param {number} startMRR
 * @param {number} currentRate decimal
 * @param {number} improvedRate decimal
 * @param {number} months
 * @returns {{ current, improved, combined, mrrDifference, customersDifference, annualRevenueDifference }}
 */
export function forecastComparison(startCustomers, startMRR, currentRate, improvedRate, months = 12) {
  const current  = forecastRetention(startCustomers, startMRR, currentRate, months)
  const improved = forecastRetention(startCustomers, startMRR, improvedRate, months)

  return {
    current,
    improved,
    combined: current.map((c, i) => ({
      month: c.month,
      label: c.label,
      currentMRR: c.mrr,
      improvedMRR: improved[i].mrr,
      currentCustomers: c.customers,
      improvedCustomers: improved[i].customers,
    })),
    mrrDifference: improved[months].mrr - current[months].mrr,
    customersDifference: improved[months].customers - current[months].customers,
    annualRevenueDifference: (improved[months].mrr - current[months].mrr) * 12,
  }
}

/**
 * Generate a cohort-style retention percentage curve over N months.
 * @param {number} monthlyChurnRate decimal
 * @param {number} months
 * @returns {Array<{ month, label, retention }>}
 */
export function generateRetentionCurve(monthlyChurnRate, months = 12) {
  const data = []
  const rate = Math.min(Math.max(monthlyChurnRate || 0, 0), 1)
  for (let i = 0; i <= months; i++) {
    data.push({
      month: i,
      label: `M${i}`,
      retention: +(Math.pow(1 - rate, i) * 100).toFixed(1),
    })
  }
  return data
}
