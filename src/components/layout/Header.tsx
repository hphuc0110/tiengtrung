import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data/site'
import { Brand } from '../ui/Brand'
import { RegisterButton } from '../registration/RegisterButton'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`site-header${open ? ' nav-open' : ''}`} id="top">
      <div className="container header-inner">
        <Brand />
        <nav className="nav" aria-label="Điều hướng chính">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <RegisterButton
            variant="solid"
            size="sm"
            className="nav-register"
            onClick={() => setOpen(false)}
          >
            Đăng ký ngay
          </RegisterButton>
        </nav>
        <RegisterButton variant="solid" size="sm">
          Đăng ký ngay
        </RegisterButton>
        <button
          className="nav-toggle"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
