export default function InstagramIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="25%" stopColor="#fd5949" />
          <stop offset="50%" stopColor="#d6249f" />
          <stop offset="100%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="12" height="12" rx="3" fill="url(#ig-grad)" />
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="white" strokeWidth="1.2" />
      <circle cx="6" cy="6" r="1.5" stroke="white" strokeWidth="1.2" />
      <circle cx="9" cy="3" r="0.6" fill="white" />
    </svg>
  )
}
