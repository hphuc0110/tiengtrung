import { useRegistrationModal } from '../../context/RegistrationModalContext'

export function FloatingRegisterButton() {
  const { open, isOpen } = useRegistrationModal()

  if (isOpen) return null

  return (
    <button type="button" className="reg-fab" onClick={open}>
      Đăng ký ngay
    </button>
  )
}
