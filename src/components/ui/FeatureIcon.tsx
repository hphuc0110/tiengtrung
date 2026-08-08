type FeatureIconProps = {
  name: 'book' | 'teacher' | 'workshop'
}

export function FeatureIcon({ name }: FeatureIconProps) {
  if (name === 'book') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14h12M14 20h12M14 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (name === 'teacher') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 34c2-8 10-12 12-12s10 4 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 28V12l12-6 12 6v16l-12 6-12-6z" stroke="currentColor" strokeWidth="2" />
      <path d="M20 18v10M14 22h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
