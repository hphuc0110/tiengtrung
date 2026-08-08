import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type RegistrationModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const RegistrationModalContext = createContext<RegistrationModalContextValue | null>(
  null,
)

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  return (
    <RegistrationModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </RegistrationModalContext.Provider>
  )
}

export function useRegistrationModal() {
  const ctx = useContext(RegistrationModalContext)
  if (!ctx) {
    throw new Error('useRegistrationModal must be used within RegistrationModalProvider')
  }
  return ctx
}
