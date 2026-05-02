const PATHS = [
  "M16 4V8",
  "M24.485 7.51501L21.6562 10.3438",
  "M28 16H24",
  "M24.485 24.485L21.6562 21.6562",
  "M16 28V24",
  "M7.51514 24.485L10.3439 21.6562",
  "M4 16H8",
  "M7.51514 7.51501L10.3439 10.3438",
]

export default function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <g clipPath="url(#clip0_137_276)">
        {PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: 'spinner-fade 1s linear infinite',
              animationDelay: `${-(i / PATHS.length)}s`,
            }}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_137_276">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
