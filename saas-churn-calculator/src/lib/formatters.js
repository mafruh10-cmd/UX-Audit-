/**
 * formatters.js
 * Display formatting utilities for the ChurnIQ dashboard.
 */

/**
 * Format a decimal as a percentage string.
 * @param {number|null} value decimal (0.05 = 5%)
 * @param {number} decimals
 * @returns {string}
 */
export function formatPercent(value, decimals = 1) {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) return '—'
  return `${(value * 100).toFixed(decimals)}%`
}

/**
 * Format a number as a compact currency string.
 * @param {number|null} value
 * @param {boolean} compact whether to use K/M shorthand
 * @returns {string}
 */
export function formatCurrency(value, compact = true) {
  if (value === null || value === undefined || isNaN(value)) return '—'
  const v = Math.abs(value)
  const sign = value < 0 ? '-' : ''
  if (compact) {
    if (v >= 1_000_000) return `${sign}$${(v / 1_000_000).toFixed(1)}M`
    if (v >= 1_000)     return `${sign}$${(v / 1_000).toFixed(0)}K`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

/**
 * Format a number with thousands separators.
 * @param {number|null} value
 * @returns {string}
 */
export function formatNumber(value) {
  if (value === null || value === undefined || isNaN(value)) return '—'
  return new Intl.NumberFormat('en-US').format(Math.round(value))
}

/**
 * Format a number of months into a human-readable duration.
 * @param {number|null} value months
 * @returns {string}
 */
export function formatMonths(value) {
  if (value === null || value === undefined || isNaN(value) || !isFinite(value)) return '—'
  if (value >= 12) return `${(value / 12).toFixed(1)} yrs`
  return `${value.toFixed(1)} mo`
}

/**
 * Format a ratio with × suffix.
 * @param {number|null} value
 * @returns {string}
 */
export function formatMultiple(value) {
  if (value === null || value === undefined || isNaN(value)) return '—'
  return `${value.toFixed(1)}×`
}

/**
 * Human-readable label for a churn period key.
 * @param {'monthly'|'quarterly'|'yearly'} period
 * @returns {string}
 */
export function formatPeriod(period) {
  const labels = { monthly: 'Monthly', quarterly: 'Quarterly', yearly: 'Annual' }
  return labels[period] || 'Monthly'
}
