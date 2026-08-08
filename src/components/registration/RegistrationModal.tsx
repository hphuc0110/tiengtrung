import { useRegistrationModal } from '../../context/RegistrationModalContext'
import { RegistrationForm } from '../sections/RegistrationForm'

export function RegistrationModal() {
  const { isOpen, close } = useRegistrationModal()

  if (!isOpen) return null

  return (
    <div className="reg-modal" role="dialog" aria-modal="true" aria-labelledby="reg-modal-title">
      <button
        type="button"
        className="reg-modal-backdrop"
        onClick={close}
        aria-label="Đóng form đăng ký"
      />
      <div className="reg-modal-box">
        <button
          type="button"
          className="reg-modal-close"
          onClick={close}
          aria-label="Đóng"
        >
          ×
        </button>
        <h2 id="reg-modal-title">Đăng ký tư vấn</h2>
        <p className="reg-modal-lead">
          Để lại thông tin, đội ngũ Đông Phương Học Quán sẽ liên hệ tư vấn lộ trình phù hợp
          cho bạn.
        </p>
        <RegistrationForm onSuccess={close} />
      </div>
    </div>
  )
}
