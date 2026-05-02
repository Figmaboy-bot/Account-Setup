export default function Field({ label, optional, required, id, type = 'text', placeholder, value, onChange }) {
  return (
    <div style={styles.field}>
      <label htmlFor={id} style={styles.label}>
        {label}
        {required && <span style={styles.required}> *</span>}
        {optional && <span style={styles.optional}> (Optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={id}
        style={styles.input}
        onFocus={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.7)')}
        onBlur={(e) => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
      />
    </div>
  )
}

const styles = {
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
  required: {
    color: 'rgba(255,0,0,0.6)',
  },
  optional: {
    fontStyle: 'italic',
    color: 'rgba(0,0,0,0.6)',
  },
  input: {
    width: '100%',
    background: '#fff',
    border: '2px solid rgba(0,0,0,0.1)',
    borderRadius: 16,
    padding: 16,
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    lineHeight: '20px',
    outline: 'none',
    transition: 'border-color 0.15s ease',
  },
}
