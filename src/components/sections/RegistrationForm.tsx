import { useState, type FormEvent } from 'react'
import {
  RegistrationConfigError,
  submitRegistration,
} from '../../lib/submitRegistration'
import { Button } from '../ui/Button'

type FormData = {
  fullName: string
  phone: string
  email: string
  address: string
  occupation: string
  contactMethod: string
  learningPurpose: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const OCCUPATIONS = [
  { value: '', label: 'Chọn nghề nghiệp' },
  { value: 'sinh-vien', label: 'Sinh viên' },
  { value: 'hoc-sinh', label: 'Học sinh' },
  { value: 'nguoi-di-lam', label: 'Người đi làm' },
] as const

const CONTACT_METHODS = [
  { value: '', label: 'Chọn hình thức liên hệ' },
  { value: 'zalo', label: 'Zalo' },
  { value: 'goi-dien', label: 'Gọi điện trực tiếp' },
] as const

const INITIAL: FormData = {
  fullName: '',
  phone: '',
  email: '',
  address: '',
  occupation: '',
  contactMethod: '',
  learningPurpose: '',
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ tên'
  }

  if (!data.phone.trim()) {
    errors.phone = 'Vui lòng nhập số điện thoại'
  } else if (!/^[\d\s+()-]{9,15}$/.test(data.phone.trim())) {
    errors.phone = 'Số điện thoại không hợp lệ'
  }

  if (!data.email.trim()) {
    errors.email = 'Vui lòng nhập email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Email không hợp lệ'
  }

  if (!data.address.trim()) {
    errors.address = 'Vui lòng nhập địa chỉ'
  }

  if (!data.occupation) {
    errors.occupation = 'Vui lòng chọn nghề nghiệp'
  }

  return errors
}

type RegistrationFormProps = {
  onSuccess?: () => void
}

export function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const update =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    setSubmitError('')

    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await submitRegistration(form)
      setForm(INITIAL)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof RegistrationConfigError
          ? 'Hệ thống chưa kết nối Google Sheet. Vui lòng cấu hình VITE_GOOGLE_SCRIPT_URL.'
          : 'Không gửi được đăng ký. Vui lòng thử lại sau.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="reg-form-success" role="status">
        <strong>Cảm ơn bạn đã đăng ký!</strong>
        <p>
          Đội ngũ Đông Phương Học Quán sẽ liên hệ tư vấn lộ trình trong thời gian sớm nhất.
        </p>
        <div className="reg-form-success-actions">
          <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
            Gửi đăng ký khác
          </Button>
          {onSuccess && (
            <Button type="button" variant="solid" onClick={onSuccess}>
              Đóng
            </Button>
          )}
        </div>
      </div>
    )
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit} noValidate>
      <div className="reg-form-grid">
        <div className="reg-field">
          <label htmlFor="fullName">
            Họ tên <span className="req">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={update('fullName')}
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <span className="reg-error" id="fullName-error">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="reg-field">
          <label htmlFor="phone">
            Số điện thoại <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span className="reg-error" id="phone-error">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="reg-field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={update('email')}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span className="reg-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="reg-field">
          <label htmlFor="address">
            Địa chỉ <span className="req">*</span>
          </label>
          <input
            id="address"
            type="text"
            name="address"
            value={form.address}
            onChange={update('address')}
            autoComplete="street-address"
            aria-invalid={!!errors.address}
            aria-describedby={errors.address ? 'address-error' : undefined}
          />
          {errors.address && (
            <span className="reg-error" id="address-error">
              {errors.address}
            </span>
          )}
        </div>

        <div className="reg-field">
          <label htmlFor="occupation">
            Nghề nghiệp hiện tại <span className="req">*</span>
          </label>
          <select
            id="occupation"
            name="occupation"
            value={form.occupation}
            onChange={update('occupation')}
            aria-invalid={!!errors.occupation}
            aria-describedby={errors.occupation ? 'occupation-error' : undefined}
          >
            {OCCUPATIONS.map((opt) => (
              <option key={opt.value || 'placeholder'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.occupation && (
            <span className="reg-error" id="occupation-error">
              {errors.occupation}
            </span>
          )}
        </div>

        <div className="reg-field">
          <label htmlFor="contactMethod">Hình thức liên hệ tư vấn mong muốn</label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={form.contactMethod}
            onChange={update('contactMethod')}
          >
            {CONTACT_METHODS.map((opt) => (
              <option key={opt.value || 'placeholder'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="reg-field reg-field-full">
          <label htmlFor="learningPurpose">
            Bạn dự định học tiếng Trung nhằm phục vụ mục đích gì?
          </label>
          <textarea
            id="learningPurpose"
            name="learningPurpose"
            value={form.learningPurpose}
            onChange={update('learningPurpose')}
            rows={3}
            placeholder="Ví dụ: thi HSK, du học, công việc..."
          />
        </div>
      </div>

      {submitError && (
        <p className="reg-submit-error" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="solid"
        className="reg-submit"
        disabled={submitting}
      >
        {submitting ? 'Đang gửi...' : 'Gửi đăng ký tư vấn'}
      </Button>
    </form>
  )
}
