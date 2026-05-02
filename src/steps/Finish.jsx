import ArrowIcon from '../icons/ArrowIcon'
import BackArrow from '../icons/BackArrow'
import LinearIcon from '../icons/tools/LinearIcon'
import HubSpotIcon from '../icons/tools/HubSpotIcon'
import MailchimpIcon from '../icons/tools/MailchimpIcon'
import TrelloIcon from '../icons/tools/TrelloIcon'
import XIcon from '../icons/socials/XIcon'
import InstagramIcon from '../icons/socials/InstagramIcon'
import LinkedInIcon from '../icons/socials/LinkedInIcon'
import GitHubIcon from '../icons/socials/GitHubIcon'

const TOOL_META = {
  linear:    { label: 'Linear',    Icon: LinearIcon },
  hubspot:   { label: 'HubSpot',   Icon: HubSpotIcon },
  mailchimp: { label: 'Mailchimp', Icon: MailchimpIcon },
  trello:    { label: 'Trello',    Icon: TrelloIcon },
}

const SOCIAL_META = {
  twitter:   { label: 'Twitter / X', Icon: XIcon },
  instagram: { label: 'Instagram',   Icon: InstagramIcon },
  linkedin:  { label: 'LinkedIn',    Icon: LinkedInIcon },
  github:    { label: 'GitHub',      Icon: GitHubIcon },
}

function Badge({ Icon, label }) {
  return (
    <div style={styles.badge}>
      <Icon size={12} />
      <span style={styles.badgeLabel}>{label}</span>
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div style={styles.row}>
      <p style={styles.rowLabel}>{label}</p>
      <div style={styles.rowValue}>{children}</div>
    </div>
  )
}

export default function Finish({ formData, onGoToStep }) {
  const { personal, socials, tools } = formData

  const connectedTools = Object.entries(tools)
    .filter(([, v]) => v)
    .map(([k]) => TOOL_META[k])

  const linkedSocials = Object.entries(socials)
    .filter(([, v]) => v.trim() !== '')
    .map(([k]) => SOCIAL_META[k])

  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.title}>You're All Set 🎉</h1>
        <p style={styles.subtitle}>Your account is ready</p>
      </div>

      <div style={styles.card}>
        <Row label="Name :">
          <p style={styles.value}>{personal.fullName || '—'}</p>
        </Row>

        <Row label="Email :">
          <p style={styles.value}>{personal.email || '—'}</p>
        </Row>

        <Row label="Linked tools :">
          <div style={styles.badges}>
            {connectedTools.length > 0
              ? connectedTools.map(({ label, Icon }) => (
                  <Badge key={label} Icon={Icon} label={label} />
                ))
              : <p style={styles.empty}>None</p>}
          </div>
        </Row>

        <Row label="Linked socials :">
          <div style={styles.badges}>
            {linkedSocials.length > 0
              ? linkedSocials.map(({ label, Icon }) => (
                  <Badge key={label} Icon={Icon} label={label} />
                ))
              : <p style={styles.empty}>None</p>}
          </div>
        </Row>
      </div>

      <div style={styles.nav}>
        <button
          type="button"
          onClick={() => onGoToStep(1)}
          style={styles.btnEdit}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
        >
          <BackArrow />
          Edit
        </button>

        <button
          type="button"
          style={styles.btnDashboard}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1a1a1a')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
          onClick={() => alert('Welcome to your dashboard!')}
        >
          Go to Dashboard
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
    lineHeight: '32px',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: 'normal',
  },
  card: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  rowValue: {
    width: 300,
    flexShrink: 0,
  },
  value: {
    fontSize: 16,
    fontWeight: 600,
    color: '#000',
    lineHeight: '20px',
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#f6f6f6',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 8,
    padding: '4px 8px',
  },
  badgeLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: '#000',
    lineHeight: '16px',
    whiteSpace: 'nowrap',
    fontFamily: "'Inter Tight', sans-serif",
  },
  empty: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.4)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnEdit: {
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
  btnDashboard: {
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
