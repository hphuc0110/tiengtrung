import { BRAND } from '../../data/site'

type BrandProps = {
  light?: boolean
  className?: string
}

export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`brand-mark ${className}`.trim()} aria-hidden="true">
      <img src="/logo.png" alt="" width={64} height={64} />
    </span>
  )
}

export function Brand({ light = false, className = '' }: BrandProps) {
  return (
    <a href="#top" className={`brand ${className}`.trim()}>
      <BrandMark />
      <span className={`brand-name${light ? ' light' : ''}`}>{BRAND.name}</span>
    </a>
  )
}
