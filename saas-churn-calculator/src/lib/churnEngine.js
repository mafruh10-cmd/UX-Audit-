/**
 * churnEngine.js
 * Core calculation engine for the SaaS Churn & Retention Calculator.
 * All functions return null when inputs are insufficient to produce a meaningful result.
 */

// ─── Safe Division ────────────────────────────────────────────────────────────
/**
 * Divides numerator by denominator, returning null on division-by-zero or non-finite results.
 * @param {number} numerator
 * @param {number} denominator
 * @returns {number|null}
 */
function safeDivide(numerator, denominator) {
  if (denominator === null || denominator === undefined || denominator === 0) return null
  const result = numerator / denominator
  return isFinite(result) ? result : null
}

// ─── Core Calculations ────────────────────────────────────────────────────────

/**
 * A. Customer Churn Rate = Lost Customers / Customers at Start
 * @param {number} customersStart
 * @param {number} customersLost
 * @returns {number|null} rate as decimal (0.05 = 5%)
 */
export function calculateCustomerChurnRate(customersStart, customersLost) {
  return safeDivide(customersLost, customersStart)
}

/**
 * B. Revenue Churn Rate = Lost MRR / Starting MRR
 * @param {number} startingMRR
 * @param {number} lostMRR
 * @returns {number|null}
 */
export function calculateRevenueChurnRate(startingMRR, lostMRR) {
  return safeDivide(lostMRR, startingMRR)
}

/**
 * C. Gross Revenue Retention = (Starting MRR - Lost MRR) / Starting MRR
 * Represents the % of revenue retained from existing customers, ignoring expansion.
 * @param {number} startingMRR
 * @param {number} lostMRR
 * @returns {number|null}
 */
export function calculateGRR(startingMRR, lostMRR) {
  if (!startingMRR) return null
  return safeDivide(startingMRR - lostMRR, startingMRR)
}

/**
 * D. Net Revenue Retention = (Starting MRR - Lost MRR + Expansion MRR) / Starting MRR
 * Above 100% means expansion offsets churn entirely.
 * @param {number} startingMRR
 * @param {number} lostMRR
 * @param {number|null} expansionMRR
 * @returns {number|null}
 */
export function calculateNRR(startingMRR, lostMRR, expansionMRR) {
  if (expansionMRR === null || expansionMRR === undefined) return null
  return safeDivide(startingMRR - lostMRR + expansionMRR, startingMRR)
}

/**
 * E. Net Revenue Churn = (Lost MRR - Expansion MRR) / Starting MRR
 * Positive = net contraction; negative = net expansion (negative churn).
 * @param {number} startingMRR
 * @param {number} lostMRR
 * @param {number|null} expansionMRR
 * @returns {number|null}
 */
export function calculateNetRevenueChurn(startingMRR, lostMRR, expansionMRR) {
  if (expansionMRR === null || expansionMRR === undefined) return null
  return safeDivide(lostMRR - expansionMRR, startingMRR)
}

/**
 * F. Customer Lifetime = 1 / Customer Churn Rate (in periods)
 * @param {number|null} customerChurnRate
 * @returns {number|null} months if monthly rate, quarters if quarterly, etc.
 */
export function calculateCustomerLifetime(customerChurnRate) {
  if (!customerChurnRate || customerChurnRate <= 0) return null
  return 1 / customerChurnRate
}

/**
 * G. LTV = ARPU × Customer Lifetime
 * Uses providedLTV if given, otherwise calculates from ARPU and lifetime.
 * @param {number|null} arpu
 * @param {number|null} customerLifetime
 * @param {number|null} providedLTV
 * @returns {number|null}
 */
export function calculateLTV(arpu, customerLifetime, providedLTV) {
  if (providedLTV && providedLTV > 0) return providedLTV
  if (!arpu || !customerLifetime) return null
  return arpu * customerLifetime
}

/**
 * H. Revenue at Risk — annualized lost MRR based on the selected period.
 * @param {number} lostMRR
 * @param {'monthly'|'quarterly'|'yearly'} period
 * @returns {number|null}
 */
export function calculateRevenueAtRisk(lostMRR, period) {
  if (!lostMRR) return null
  const multipliers = { monthly: 12, quarterly: 4, yearly: 1 }
  return lostMRR * (multipliers[period] || 12)
}

/**
 * I. Ending MRR = Starting - Lost + Expansion + New
 * @param {number} startingMRR
 * @param {number} lostMRR
 * @param {number|null} expansionMRR
 * @param {number} newMRR
 * @returns {number}
 */
export function calculateEndingMRR(startingMRR, lostMRR, expansionMRR, newMRR) {
  return (startingMRR || 0) - (lostMRR || 0) + (expansionMRR || 0) + (newMRR || 0)
}

/**
 * J. Expansion Contribution = Expansion MRR / Lost MRR
 * Shows what fraction of churn is offset by expansion.
 * @param {number|null} expansionMRR
 * @param {number} lostMRR
 * @returns {number|null}
 */
export function calculateExpansionContribution(expansionMRR, lostMRR) {
  if (expansionMRR === null || expansionMRR === undefined) return null
  return safeDivide(expansionMRR, lostMRR)
}

// ─── Master Runner ────────────────────────────────────────────────────────────
/**
 * Runs all churn calculations from a flat form inputs object.
 * @param {Object} inputs
 * @returns {Object} all computed metrics
 */
export function runChurnAnalysis(inputs) {
  const {
    customersStart = 0,
    customersLost = 0,
    startingMRR = 0,
    lostMRR = 0,
    expansionMRR: rawExpansion,
    newCustomers = 0,
    newMRR = 0,
    arpu,
    cac,
    ltv: providedLTV,
    nrr: providedNRR,
    period = 'monthly',
  } = inputs

  // Determine if expansion data was intentionally provided
  const hasExpansionData = rawExpansion !== undefined && rawExpansion !== null && rawExpansion !== ''
  const expansionMRR = hasExpansionData ? Number(rawExpansion) : null
  const hasAdvancedData = !!(arpu || cac || providedLTV || providedNRR)

  const customerChurnRate    = calculateCustomerChurnRate(Number(customersStart), Number(customersLost))
  const revenueChurnRate     = calculateRevenueChurnRate(Number(startingMRR), Number(lostMRR))
  const grr                  = calculateGRR(Number(startingMRR), Number(lostMRR))
  const nrr                  = providedNRR
    ? (Number(providedNRR) / 100)
    : calculateNRR(Number(startingMRR), Number(lostMRR), expansionMRR)
  const netRevenueChurn      = calculateNetRevenueChurn(Number(startingMRR), Number(lostMRR), expansionMRR)
  const customerLifetime     = calculateCustomerLifetime(customerChurnRate)
  const ltv                  = calculateLTV(
    Number(arpu) || null,
    customerLifetime,
    Number(providedLTV) || null,
  )
  const ltvCacRatio          = (ltv && cac) ? safeDivide(ltv, Number(cac)) : null
  const revenueAtRisk        = calculateRevenueAtRisk(Number(lostMRR), period)
  const endingMRR            = calculateEndingMRR(
    Number(startingMRR),
    Number(lostMRR),
    expansionMRR,
    Number(newMRR),
  )
  const expansionContribution = calculateExpansionContribution(expansionMRR, Number(lostMRR))

  return {
    customerChurnRate,
    revenueChurnRate,
    grr,
    nrr,
    netRevenueChurn,
    customerLifetime,
    ltv,
    cac: cac ? Number(cac) : null,
    ltvCacRatio,
    revenueAtRisk,
    endingMRR,
    expansionContribution,
    expansionMRR,
    newCustomers: Number(newCustomers) || 0,
    newMRR: Number(newMRR) || 0,
    hasExpansionData,
    hasAdvancedData,
    period,
    startingMRR: Number(startingMRR),
    lostMRR: Number(lostMRR),
    customersStart: Number(customersStart),
    customersLost: Number(customersLost),
  }
}
