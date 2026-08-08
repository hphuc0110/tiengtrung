import type { ReactNode } from 'react'
import { useRegistrationModal } from '../../context/RegistrationModalContext'
import { Button } from '../ui/Button'

type RegisterButtonProps = {
  children: ReactNode
  variant?: 'solid' | 'light' | 'outline' | 'outline-light'
  size?: 'md' | 'sm'
  className?: string
}

export function RegisterButton({
  children,
  variant = 'solid',
  size = 'md',
  className = '',
}: RegisterButtonProps) {
  const { open } = useRegistrationModal()

  return (
    <Button variant={variant} size={size} className={className} onClick={open}>
      {children}
    </Button>
  )
}
