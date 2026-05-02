import { useState } from 'react'
import Spinner from './icons/Spinner'
import SealCheck from './icons/SealCheck'
import PersonalInfo from './steps/PersonalInfo'
import LinkSocials from './steps/LinkSocials'
import ToolsIntegrations from './steps/ToolsIntegrations'
import ChoosePlan from './steps/ChoosePlan'
import Finish from './steps/Finish'

const STEPS = [
  { id: 1, label: 'Personal Information' },
  { id: 2, label: 'Link Socials' },
  { id: 3, label: 'Tools Integrations' },
  { id: 4, label: 'Choose Plan' },
  { id: 5, label: 'Finish' },
]

const STEP_COMPONENTS = {
  1: PersonalInfo,
  2: LinkSocials,
  3: ToolsIntegrations,
  4: ChoosePlan,
  5: Finish,
}

function StepIndicator({ stepId, currentStep }) {
  if (stepId < currentStep) return <SealCheck />
  if (stepId === currentStep) return <Spinner />
  return (
    <div style={styles.stepCircle}>
      <span style={styles.stepNumber}>{stepId}</span>
    </div>
  )
}

function Sidebar({ currentStep }) {
  return (
    <aside style={styles.sidebar}>
      <p style={styles.sidebarTitle}>Account Setup</p>
      <div style={styles.steps}>
        <div style={styles.stepLine} />
        {STEPS.map((step) => {
          const isActive = step.id === currentStep
          return (
            <div key={step.id} style={styles.step}>
              <StepIndicator stepId={step.id} currentStep={currentStep} />
              <span style={{ ...styles.stepLabel, ...(isActive ? styles.stepLabelActive : {}) }}>
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personal: { fullName: '', username: '', email: '' },
    socials: { twitter: '', instagram: '', linkedin: '', github: '' },
    tools: { linear: true, hubspot: true, mailchimp: false, trello: false },
    plan: 'free',
  })

  const update = (key) => (data) => setFormData((prev) => ({ ...prev, [key]: data }))
  const goNext = () => setCurrentStep((s) => Math.min(s + 1, STEPS.length))
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1))
  const goToStep = (step) => setCurrentStep(step)

  const StepComponent = STEP_COMPONENTS[currentStep]

  return (
    <>
      <style>{`
        @keyframes spinner-fade {
          0%   { opacity: 1; }
          100% { opacity: 0.15; }
        }
      `}</style>

      <div style={styles.page}>
        <Sidebar currentStep={currentStep} />
        <main style={styles.main}>
          {StepComponent && (
            <StepComponent
              onNext={goNext}
              onBack={goBack}
              formData={formData}
              onUpdate={update}
              onGoToStep={goToStep}
            />
          )}
        </main>
      </div>
    </>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  sidebar: {
    position: 'fixed',
    left: 64,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    width: 242,
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: 'normal',
  },
  steps: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    position: 'relative',
  },
  stepLine: {
    position: 'absolute',
    left: 15,
    top: 30,
    width: 1,
    bottom: 30,
    background: '#ddd',
    pointerEvents: 'none',
    zIndex: 0,
  },
  step: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 100,
    background: '#fff',
    border: '2px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
  },
  stepLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.4)',
    whiteSpace: 'nowrap',
  },
  stepLabelActive: {
    color: '#000',
  },
  main: {
    margin: 'auto',
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
}
