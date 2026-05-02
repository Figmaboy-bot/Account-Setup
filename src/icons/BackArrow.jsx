import ArrowIcon from './ArrowIcon'

export default function BackArrow({ color = 'rgba(0,0,0,0.6)' }) {
  return (
    <span style={{ display: 'inline-flex', transform: 'scaleX(-1)' }}>
      <ArrowIcon color={color} />
    </span>
  )
}
