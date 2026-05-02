export default function ArrowIcon({ color = 'white' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <g clip-path="url(#clip0_137_236)">
        <path d="M13.125 10L16.875 6.25L13.125 2.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.625 17.5V6.25H16.875" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_137_236">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
