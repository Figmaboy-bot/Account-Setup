export default function LinkSimple({ color = 'white' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 10.5a3.75 3.75 0 0 0 5.303.053l2.25-2.25a3.75 3.75 0 0 0-5.303-5.303L8.555 4.196"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 7.5a3.75 3.75 0 0 0-5.303-.053L2.947 9.697a3.75 3.75 0 0 0 5.303 5.303l1.189-1.189"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
