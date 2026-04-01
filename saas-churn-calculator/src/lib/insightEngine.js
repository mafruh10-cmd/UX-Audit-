/**
 * insightEngine.js
 * Generates actionable insights and recommendations from computed churn metrics.
 */

/**
 * Generate a list of insights and strategic recommendations.
 * @param {Object} metrics - output of runChurnAnalysis
 * @returns {{ insights: Array, recommendations: Array }}
 */
export function generateInsights(metrics) {
  const {
    customerChurnRate,
    revenueChurnRate,
    nrr,
    grr,
    expansionContribution,
    ltvCacRatio,
    hasExpansionData,
  } = metrics

  const insights = []
  const recommendations = []

  // ── Customer churn insights ──
  if (customerChurnRate !== null) {
    if (customerChurnRate > 0.08) {
      insights.push({
        type: 'danger',
        title: 'Critical churn level',
        text: 'Your customer churn is significantly above healthy SaaS benchmarks. At this rate, you lose over 8% of customers every period — compounding growth becomes very difficult.',
      })
    } else if (customerChurnRate > 0.05) {
      insights.push({
        type: 'warning',
        title: 'Above-average churn',
        text: 'Your churn is above the typical SaaS range of 2–5%. Left unaddressed, this will slow compounding growth and increase pressure on new customer acquisition.',
      })
    } else if (customerChurnRate < 0.02) {
      insights.push({
        type: 'success',
        title: 'Excellent customer retention',
        text: 'Your customer retention is top-tier. This creates a powerful compounding effect and significantly reduces pressure on new customer acquisition.',
      })
    } else {
      insights.push({
        type: 'info',
        title: 'Healthy churn range',
        text: 'Your churn is within a healthy range. Continued focus on retention will help compound your growth over time.',
      })
    }
  }

  // ── NRR insight ──
  if (nrr !== null) {
    if (nrr >= 1.20) {
      insights.push({
        type: 'success',
        title: 'Elite NRR',
        text: `Your NRR of ${(nrr * 100).toFixed(1)}% is world-class. Expansion revenue is growing your existing base — this is the most powerful form of SaaS compounding.`,
      })
    } else if (nrr >= 1.10) {
      insights.push({
        type: 'success',
        title: 'Strong NRR',
        text: `Your NRR of ${(nrr * 100).toFixed(1)}% is well above average. Expansion is meaningfully offsetting churn. Keep investing in your expansion motion.`,
      })
    } else if (nrr >= 1.00) {
      insights.push({
        type: 'info',
        title: 'NRR above 100%',
        text: `Your NRR of ${(nrr * 100).toFixed(1)}% means expansion is covering churn. The next objective is pushing NRR above 110% to power compounding.`,
      })
    } else {
      insights.push({
        type: 'warning',
        title: 'NRR below 100%',
        text: `Your NRR of ${(nrr * 100).toFixed(1)}% means your existing customer base is contracting in revenue terms. Churn is outpacing expansion.`,
      })
    }
  }

  // ── GRR insight (only if NRR not available) ──
  if (grr !== null && nrr === null) {
    if (grr >= 0.90) {
      insights.push({
        type: 'success',
        title: 'Strong gross retention',
        text: `Your GRR of ${(grr * 100).toFixed(1)}% is above the 90% benchmark. You retain the vast majority of your revenue base.`,
      })
    } else if (grr < 0.80) {
      insights.push({
        type: 'warning',
        title: 'Weak gross retention',
        text: `Your GRR of ${(grr * 100).toFixed(1)}% means significant revenue is leaking each period. This needs to be addressed before focusing on growth.`,
      })
    }
  }

  // ── Expansion insight ──
  if (expansionContribution !== null && expansionContribution > 0) {
    if (expansionContribution >= 0.75) {
      insights.push({
        type: 'success',
        title: 'Expansion offsets most churn',
        text: `Expansion MRR covers ${Math.round(expansionContribution * 100)}% of lost revenue — a strong signal of customer value perception and upsell potential.`,
      })
    } else if (expansionContribution >= 0.30) {
      insights.push({
        type: 'info',
        title: 'Meaningful expansion revenue',
        text: `Expansion MRR offsets ${Math.round(expansionContribution * 100)}% of churn. Growing this further is one of the highest-ROI retention investments you can make.`,
      })
    }
  } else if (!hasExpansionData) {
    insights.push({
      type: 'info',
      title: 'Expansion data not provided',
      text: 'Add your expansion MRR in Step 3 to unlock Net Revenue Retention and understand if your existing customers are growing their spend.',
    })
  }

  // ── LTV/CAC insight ──
  if (ltvCacRatio !== null) {
    if (ltvCacRatio < 3) {
      insights.push({
        type: 'warning',
        title: `LTV/CAC ratio is ${ltvCacRatio.toFixed(1)}×`,
        text: 'A ratio below 3× signals that your payback period may be too long. Improving retention is one of the most effective ways to lift this ratio.',
      })
    } else if (ltvCacRatio >= 5) {
      insights.push({
        type: 'success',
        title: `Strong LTV/CAC of ${ltvCacRatio.toFixed(1)}×`,
        text: 'You have healthy unit economics. Retention is contributing meaningfully to your LTV.',
      })
    } else {
      insights.push({
        type: 'info',
        title: `LTV/CAC ratio of ${ltvCacRatio.toFixed(1)}×`,
        text: 'Your unit economics are reasonable. Aim for 5× or above as a next target.',
      })
    }
  }

  // ── Recommendations ──
  if (customerChurnRate !== null && customerChurnRate > 0.05) {
    recommendations.push({
      icon: 'Rocket',
      category: 'Onboarding',
      text: 'Redesign your first-30-day experience. Most early churn happens before customers reach their first "aha moment". Map your activation milestones and reduce time-to-value.',
    })
    recommendations.push({
      icon: 'Zap',
      category: 'Feature Adoption',
      text: 'Identify your stickiest features using product analytics. Build in-app flows (tooltips, checklists, nudges) that guide users toward those features in week 1.',
    })
  }

  if (customerChurnRate !== null && customerChurnRate > 0.02) {
    recommendations.push({
      icon: 'CalendarDays',
      category: 'Annual Plans',
      text: 'Incentivize annual plan upgrades with a discount (typically 10–20%). Annual customers churn 3–4× less than monthly customers — this single lever dramatically improves retention.',
    })
    recommendations.push({
      icon: 'HeartHandshake',
      category: 'Customer Success',
      text: 'Set up health score monitoring. Proactively reach out to accounts with declining usage before they become at risk. Intervention before intent to cancel is far more effective.',
    })
  }

  if (!hasExpansionData || (nrr !== null && nrr < 1.00)) {
    recommendations.push({
      icon: 'TrendingUp',
      category: 'Expansion & Upsell',
      text: 'Build an expansion motion: seat-based pricing, usage-based upsells, add-on features, or tier upgrades. Even modest expansion can push NRR above 100%, transforming your growth trajectory.',
    })
  }

  if (revenueChurnRate !== null && revenueChurnRate > 0.03) {
    recommendations.push({
      icon: 'CreditCard',
      category: 'Failed Payment Recovery',
      text: 'Implement automated dunning (retry logic + email sequences for failed payments). 20–30% of SaaS churn is involuntary — this is often the fastest churn reduction lever available.',
    })
    recommendations.push({
      icon: 'Tag',
      category: 'Pricing Review',
      text: 'Audit your pricing tiers for value alignment. Price-sensitive churn often signals a mismatch between your packaging and perceived value at a given price point.',
    })
  }

  recommendations.push({
    icon: 'MessageSquare',
    category: 'Exit Surveys',
    text: 'Run a cancellation survey on every churned account. Even a 20% response rate generates enough signal to identify your top 2–3 churn reasons within a month.',
  })

  return { insights, recommendations }
}
