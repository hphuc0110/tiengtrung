export type RegistrationPayload = {
  fullName: string
  phone: string
  email: string
  address: string
  occupation: string
  contactMethod: string
  learningPurpose: string
}

const OCCUPATION_LABELS: Record<string, string> = {
  'sinh-vien': 'Sinh viên',
  'hoc-sinh': 'Học sinh',
  'nguoi-di-lam': 'Người đi làm',
}

const CONTACT_LABELS: Record<string, string> = {
  zalo: 'Zalo',
  'goi-dien': 'Gọi điện trực tiếp',
}

export class RegistrationConfigError extends Error {
  constructor() {
    super('MISSING_SCRIPT_URL')
    this.name = 'RegistrationConfigError'
  }
}

export async function submitRegistration(form: RegistrationPayload) {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim()
  if (!url) {
    throw new RegistrationConfigError()
  }

  const payload: RegistrationPayload = {
    ...form,
    occupation: OCCUPATION_LABELS[form.occupation] ?? form.occupation,
    contactMethod: CONTACT_LABELS[form.contactMethod] ?? form.contactMethod,
  }

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 15000)

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
  } finally {
    window.clearTimeout(timeout)
  }
}
