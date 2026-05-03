import { useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import BackArrow from '../icons/BackArrow'

const SOCIALS = [
  { id: 'twitter',   label: 'Twitter / X', prefix: 'https://x.com/@' },
  { id: 'instagram', label: 'Instagram',   prefix: 'https://www.instagram.com/@' },
  { id: 'linkedin',  label: 'LinkedIn',    prefix: 'https://www.linkedin.com/@' },
  { id: 'github',    label: 'GitHub',      prefix: 'https://www.github.com/@' },
]

function SocialField({ id, label, prefix, value, onChange }) {
  const [focused, setFocused] = useState(false)

  return (
    <div style={styles.field}>
      <label htmlFor={id} style={styles.label}>{label}</label>
      <div style={{ ...styles.inputWrapper, borderColor: focused ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.1)' }}>
        <span style={styles.prefix}>{prefix}</span>
        <input
          id={id}
          type="text"
          placeholder="your-username"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={styles.input}
        />
      </div>
    </div>
  )
}

export default function LinkSocials({ onNext, onBack, formData, onUpdate }) {
  const [form, setForm] = useState(formData.socials)
  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.title}>Link Socials</h1>
        <p style={styles.subtitle}>Connect your accounts to enhance your profile</p>
      </div>

      <form style={styles.fields} onSubmit={(e) => { e.preventDefault(); onUpdate('socials')(form); onNext() }}>
        {SOCIALS.map(({ id, label, prefix }) => (
          <SocialField
            key={id}
            id={id}
            label={label}
            prefix={prefix}
            value={form[id]}
            onChange={update(id)}
          />
        ))}

        <div style={styles.nav}>
          <button
            type="button"
            onClick={onBack}
            style={styles.btnBack}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.1)'; e.currentTarget.style.gap = '14px' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.06)'; e.currentTarget.style.gap = '8px' }}
          >
            <BackArrow />
            Back
          </button>

          <button
            type="submit"
            style={styles.btnNext}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.gap = '14px' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.gap = '8px' }}
          >
            Next Step
            <ArrowIcon />
          </button>
        </div>
      </form>
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
    lineHeight: 'normal',
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    lineHeight: 'normal',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    border: '2px solid rgba(0,0,0,0.1)',
    borderRadius: 16,
    padding: '16px',
    gap: 0,
    transition: 'border-color 0.15s ease',
  },
  prefix: {
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.35)',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontFamily: "'Inter Tight', sans-serif",
    lineHeight: '20px',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    lineHeight: '20px',
    minWidth: 0,
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
    transition: 'background 0.15s ease, gap 0.15s ease',
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
    transition: 'background 0.15s ease, gap 0.15s ease',
  },
}
