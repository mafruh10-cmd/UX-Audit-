import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { runChurnAnalysis } from './lib/churnEngine.js'
import { getCustomerChurnHealth } from './lib/benchmarkEngine.js'
import { formatPercent } from './lib/formatters.js'
import { StepProgress, HealthBadge } from './components/ui/shared.jsx'
import logo from './assets/logo.png'
import {
  AnimatedStep,
  Step1Customers,
  Step2Revenue,
  Step3Expansion,
  Step4Advanced,
} from './components/WizardSteps.jsx'
import { ResultsPreview, LeadCaptureModal, FullResultsDashboard } from './components/Results.jsx'

// ─── Default form state ────────────────────────────────────────────────────────
const DEFAULT_FORM = {
  customersStart: '',
  customersLost:  '',
  startingMRR:    '',
  lostMRR:        '',
  expansionMRR:   '',
  newCustomers:   '',
  newMRR:         '',
  arpu:           '',
  cac:            '',
  ltv:            '',
  nrr:            '',
  period:         'monthly',
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validateStep(step, data) {
  const errors = {}

  if (step === 1) {
    const cs = Number(data.customersStart)
    const cl = Number(data.customersLost)
    if (data.customersStart === '' || cs <= 0)
      errors.customersStart = 'Enter the number of customers at the start of the period.'
    if (data.customersLost === '' || cl < 0)
      errors.customersLost = 'Enter the number of customers lost (0 or more).'
    if (!errors.customersStart && !errors.customersLost && cl > cs)
      errors.customersLost = 'Customers lost cannot exceed customers at start.'
  }

  if (step === 2) {
    const mrr  = Number(data.startingMRR)
    const lost = Number(data.lostMRR)
    if (data.startingMRR === '' || mrr <= 0)
      errors.startingMRR = 'Enter your starting MRR.'
    if (data.lostMRR === '' || lost < 0)
      errors.lostMRR = 'Enter your lost MRR (0 or more).'
    if (!errors.startingMRR && !errors.lostMRR && lost > mrr)
      errors.lostMRR = 'Lost MRR cannot exceed starting MRR.'
  }

  return errors
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [step,     setStep]     = useState(1)   // 1–4 wizard, 5 = partial+modal, 6 = full results
  const [direction, setDir]     = useState(1)
  const [form,     setForm]     = useState(DEFAULT_FORM)
  const [errors,   setErrors]   = useState({})
  const [results,  setResults]  = useState(null)
  const [leadData, setLeadData] = useState(null)

  // Live churn rate for header badge
  const liveChurnRate = (() => {
    const cs = Number(form.customersStart)
    const cl = Number(form.customersLost)
    if (cs > 0 && cl >= 0 && cl <= cs) return cl / cs
    return null
  })()
  const liveHealth = liveChurnRate !== null ? getCustomerChurnHealth(liveChurnRate) : null

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  function goNext() {
    const e = validateStep(step, form)
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})

    if (step < 4) {
      setDir(1)
      setStep(s => s + 1)
    } else {
      // Step 4: run analysis and show partial results
      const r = runChurnAnalysis(form)
      setResults(r)
      setDir(1)
      setStep(leadData ? 6 : 5)
    }
  }

  function handleSkipStep() {
    setErrors({})
    setDir(1)
    if (step === 3) {
      setStep(4)
    } else if (step === 4) {
      const r = runChurnAnalysis(form)
      setResults(r)
      setStep(leadData ? 6 : 5)
    }
  }

  function handleLeadSubmit(lead) {
    setLeadData(lead)
    setStep(6)
  }

  function handleReset() {
    setForm(DEFAULT_FORM)
    setResults(null)
    setLeadData(null)
    setErrors({})
    setDir(-1)
    setStep(1)
  }

  function handleGoBack() {
    setDir(-1)
    setErrors({})
    if (step === 5 || step === 6) {
      setStep(4)
    } else if (step > 1) {
      setStep(s => s - 1)
    }
  }

  function handleEditInputs() {
    setDir(-1)
    setStep(4)
  }

  const STEP_LABELS = ['Customers', 'Revenue', 'Expansion', 'Advanced']
  const isWizard    = step >= 1 && step <= 4

  return (
    <div className="min-h-screen">
      {/* ── Top Nav ── */}
      <header style={{background:'#fff',borderBottom:'1px solid #E0E1E4',height:'60px',position:'sticky',top:0,zIndex:40,display:'flex',alignItems:'center',padding:'0 32px',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
          <img src={logo} alt="Saasfactor" style={{height:'28px',display:'block'}} />
          <span style={{fontSize:'10px',fontWeight:700,letterSpacing:'.10em',textTransform:'uppercase',color:'#1AC8D4',background:'rgba(26,200,212,.10)',padding:'3px 10px',borderRadius:'20px',border:'1px solid rgba(26,200,212,.18)'}}>
            ROI Calculator
          </span>
        </div>
        <span style={{fontSize:'12px',color:'#AAAAAA',letterSpacing:'.04em'}}>saasfactor.co</span>
      </header>

      {/* ── Main ── */}
      <main className="max-w-2xl mx-auto px-4 py-8 pb-28">
        {/* Progress bar */}
        {isWizard && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <StepProgress currentStep={step} totalSteps={4} labels={STEP_LABELS} />
          </motion.div>
        )}

        {/* Results header badge */}
        {step === 6 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20">
              <TrendingDown size={12} className="text-brand-500" />
              <span className="text-xs font-semibold text-brand-600 dark:text-brand-400">Churn Analysis Complete</span>
            </div>
          </motion.div>
        )}

        {/* ── Step content ── */}
        <AnimatePresence mode="wait" custom={direction}>
          {/* Wizard steps 1–4 */}
          {isWizard && (
            <AnimatedStep key={`step-${step}`} stepKey={`step-${step}`} direction={direction}>
              <div className="card p-6 sm:p-8">
                {step === 1 && <Step1Customers data={form} onChange={handleChange} errors={errors} />}
                {step === 2 && <Step2Revenue   data={form} onChange={handleChange} errors={errors} />}
                {step === 3 && <Step3Expansion data={form} onChange={handleChange} />}
                {step === 4 && <Step4Advanced  data={form} onChange={handleChange} />}

                {/* Nav buttons */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={handleGoBack}
                      disabled={step === 1}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 dark:text-gray-600 hidden sm:block">
                        {step} of 4
                      </span>
                      <button onClick={goNext} className="btn-primary">
                        {step === 4 ? 'See Results' : 'Continue'}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Skip option for optional steps */}
                  {(step === 3 || step === 4) && (
                    <div className="flex justify-center">
                      <button onClick={handleSkipStep} className="btn-ghost text-xs">
                        Skip this step
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Tip card below wizard — step 1 only */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 rounded-xl p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                >
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">How ChurnIQ works</p>
                  <div className="space-y-1.5">
                    {[
                      '4-step form — takes under 2 minutes',
                      'We compute customer churn, revenue churn, GRR, NRR, LTV and more',
                      'Get industry benchmark comparisons and health scoring',
                      'Unlock a 12-month forecast, cohort curve and action plan',
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-4 h-4 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {t}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatedStep>
          )}

          {/* Step 5: Blurred preview + lead capture modal */}
          {step === 5 && results && (
            <AnimatedStep key="partial" stepKey="partial" direction={direction}>
              {/* Blurred background */}
              <div
                className="pointer-events-none select-none"
                style={{ filter: 'blur(5px)', opacity: 0.6 }}
                aria-hidden="true"
              >
                <ResultsPreview results={results} />
              </div>

              {/* Fixed modal overlay */}
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.45)' }}
              >
                <LeadCaptureModal
                  onSubmit={handleLeadSubmit}
                  results={results}
                />
              </div>
            </AnimatedStep>
          )}

          {/* Step 6: Full results dashboard */}
          {step === 6 && results && leadData && (
            <AnimatedStep key="full" stepKey="full" direction={direction}>
              <FullResultsDashboard
                results={results}
                leadData={leadData}
                onReset={handleReset}
                onEditInputs={handleEditInputs}
              />
            </AnimatedStep>
          )}
        </AnimatePresence>
      </main>

      {/* ── Sticky mobile bottom nav ── */}
      {isWizard && (
        <div className="fixed bottom-0 inset-x-0 sm:hidden border-t border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90 glass px-4 py-3 space-y-2">
          <button onClick={goNext} className="btn-primary w-full">
            {step === 4 ? 'See Results' : 'Continue'}
          </button>
          {(step === 3 || step === 4) && (
            <button onClick={handleSkipStep} className="btn-ghost w-full text-xs">
              Skip this step
            </button>
          )}
        </div>
      )}
    </div>
  )
}
