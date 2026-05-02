import { useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'
import BackArrow from '../icons/BackArrow'
import LinkSimple from '../icons/LinkSimple'
import LinearIcon from '../icons/tools/LinearIcon'
import HubSpotIcon from '../icons/tools/HubSpotIcon'
import MailchimpIcon from '../icons/tools/MailchimpIcon'
import TrelloIcon from '../icons/tools/TrelloIcon'

const TOOLS = [
  {
    id: 'linear',
    name: 'Linear',
    description: 'Project & issue tracking',
    Icon: LinearIcon,
    defaultConnected: true,
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'CRM & marketing platform',
    Icon: HubSpotIcon,
    defaultConnected: true,
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing & automation',
    Icon: MailchimpIcon,
    defaultConnected: false,
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'Visual project management',
    Icon: TrelloIcon,
    defaultConnected: false,
  },
]

function ToolRow({ name, description, Icon, connected, onToggle }) {
  return (
    <div style={styles.row}>
      <div style={styles.toolInfo}>
        <Icon size={48} />
        <div style={styles.toolText}>
          <p style={styles.toolName}>{name}</p>
          <p style={styles.toolDesc}>{description}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggle}
        style={connected ? styles.btnConnected : styles.btnConnect}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        {connected ? (
          <>
            Connected
            <LinkSimple color="white" />
          </>
        ) : (
          'Connect'
        )}
      </button>
    </div>
  )
}

export default function ToolsIntegrations({ onNext, onBack, formData, onUpdate }) {
  const [connected, setConnected] = useState(formData.tools)

  const toggle = (id) => setConnected((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <>
      <div style={styles.header}>
        <h1 style={styles.title}>Tools Integrations</h1>
        <p style={styles.subtitle}>Connect tools you already use</p>
      </div>

      <div style={styles.list}>
        {TOOLS.map((tool) => (
          <ToolRow
            key={tool.id}
            name={tool.name}
            description={tool.description}
            Icon={tool.Icon}
            connected={connected[tool.id]}
            onToggle={() => toggle(tool.id)}
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
          onClick={() => { onUpdate('tools')(connected); onNext() }}
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
    lineHeight: 'normal',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  toolInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flex: 1,
    minWidth: 0,
  },
  toolText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1,
    minWidth: 0,
  },
  toolName: {
    fontSize: 20,
    fontWeight: 600,
    color: '#000',
    lineHeight: '24px',
  },
  toolDesc: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(0,0,0,0.6)',
    lineHeight: '20px',
  },
  btnConnected: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '12px 20px',
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '18px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.15s ease',
    flexShrink: 0,
  },
  btnConnect: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#fff',
    color: '#000',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: '12px 20px',
    fontFamily: "'Inter Tight', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '18px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.15s ease',
    flexShrink: 0,
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
