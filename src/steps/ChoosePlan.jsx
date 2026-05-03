import { useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import BackArrow from '../icons/BackArrow'

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    description: 'For individuals or small teams getting started',
    price: '$ 0.00',
    period: 'Monthly',
    features: [
      'Up to 500 contacts',
      'Basic contact & company management',
      'Deal pipeline (1 pipeline)',
      'Task & activity tracking',
      'Email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'For growing teams that need more power',
    price: '$ 29.00',
    period: 'Monthly',
    features: [
      'Up to 10,000 contacts',
      'Advanced CRM features',
      'Unlimited pipelines',
      'Workflow automation',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: '$ 99.00',
    period: 'Monthly',
    features: [
      'Unlimited contacts',
      'Custom integrations',
      'Dedicated account manager',
      'SSO & advanced security',
      '24/7 premium support',
    ],
  },
]

function Dot() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="4" cy="4" r="4" fill="rgba(0,0,0,0.4)" />
    </svg>
  )
}

function PlanCard({ plan, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      style={{
        ...styles.card,
        border: selected ? '1px solid #000' : '1px solid rgba(0,0,0,0.1)',
        cursor: 'pointer',
      }}
    >
      <div style={{
        ...styles.cardHeader,
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        borderBottomColor: selected ? 'rgba(0,0,0,0.1)' : 'transparent',
        paddingBottom: selected ? 20 : 0,
        transition: 'padding-bottom 0.35s ease, border-color 0.35s ease',
      }}>
        <div style={styles.planInfo}>
          <p style={styles.planName}>{plan.name}</p>
          <p style={styles.planDesc}>{plan.description}</p>
        </div>
        <div style={styles.priceInfo}>
          <p style={styles.price}>{plan.price}</p>
          <p style={styles.period}>{plan.period}</p>
        </div>
      </div>

      <div style={{
        overflow: 'hidden',
        maxHeight: selected ? 300 : 0,
        opacity: selected ? 1 : 0,
        transition: 'max-height 0.35s ease, opacity 0.25s ease',
      }}>
        <div style={styles.features}>
          {plan.features.map((f) => (
            <div key={f} style={styles.featureRow}>
              <Dot />
              <p style={styles.featureText}>{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ChoosePlan({ onNext, onBack, formData, onUpdate }) {
  const [selected, setSelected] = useState(formData.plan)

  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.title}>Choose Your Plan</h1>
        <p style={styles.subtitle}>Start free or unlock more features</p>
      </div>

      <div style={styles.plans}>
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            selected={selected === plan.id}
            onSelect={() => setSelected(plan.id)}
          />
        ))}
      </div>

      <div style={styles.nav}>
        <button
          type="button"
          onClick={onBack}
          style={styles.btnBack}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
        >
          <BackArrow />
          Back
        </button>

        <button
          type="button"
          onClick={() => { onUpdate('plan')(selected); onNext() }}
          style={styles.btnNext}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
        >
          Next Step
          <ArrowIcon />
        </button>
      </div>
    </>
  )
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    color: '#000',
    lineHeight: '28px',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    color: 'rgba(0,0,0,0.6)',
  },
  plans: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  card: {
    background: '#fff',
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    transition: 'border-color 0.15s ease',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  planInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1,
    minWidth: 0,
  },
  planName: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
    lineHeight: '24px',
  },
  planDesc: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '20px',
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: '#000',
    lineHeight: '24px',
  },
  period: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '20px',
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingTop: 20,
  },
  featureRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  featureText: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '20px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnBack: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(0,0,0,0.06)',
    color: 'rgba(0,0,0,0.6)',
    border: 'none',
    borderRadius: 12,
    padding: '12px 24px',
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
  },
  btnNext: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '12px 24px',
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
  },
}
