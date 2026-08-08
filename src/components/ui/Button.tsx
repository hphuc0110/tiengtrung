import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'light' | 'outline' | 'outline-light'

type ButtonProps = {
  variant?: Variant
  size?: 'md' | 'sm'
  href?: string
  children: ReactNode
  className?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const variantClass: Record<Variant, string> = {
  solid: 'btn-solid',
  light: 'btn-light',
  outline: 'btn-outline',
  'outline-light': 'btn-outline-light',
}

export function Button({
  variant = 'solid',
  size = 'md',
  href,
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    variantClass[variant],
    size === 'sm' ? 'btn-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
