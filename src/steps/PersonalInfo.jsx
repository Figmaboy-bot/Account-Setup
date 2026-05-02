import { useState } from 'react'
import Field from '../components/Field'
import ArrowIcon from '../icons/ArrowIcon'

export default function PersonalInfo({ onNext, formData, onUpdate }) {
  const [form, setForm] = useState(formData.personal)
  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.title}>Personal Information</h1>
        <p style={styles.subtitle}>Enter your details to continue</p>
      </div>

      <form style={styles.fields} onSubmit={(e) => { e.preventDefault(); onUpdate('personal')(form); onNext() }}>
        <Field
          id="fullName"
          label="Full Name"
          required
          placeholder="John Doe"
          value={form.fullName}
          onChange={update('fullName')}
        />
        <Field
          id="username"
          label="Username"
          optional
          placeholder="johndoe"
          value={form.username}
          onChange={update('username')}
        />
        <Field
          id="email"
          type="email"
          label="Email Address"
          required
          placeholder="johndoe@gmail.com"
          value={form.email}
          onChange={update('email')}
        />

        <button
          type="submit"
          style={styles.btnNext}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
        >
          Next Step
          <ArrowIcon />
        </button>
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
    alignSelf: 'flex-start',
  },
}
