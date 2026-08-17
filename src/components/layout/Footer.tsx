import { BRAND, CONTACT } from '../../data/site'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand light className="footer-logo" />
          <p>{BRAND.tagline}</p>
          <div className="social">
            <a href={CONTACT.website} aria-label="Website" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
              </svg>
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 7 9-7" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3>Liên kết</h3>
          <ul>
            <li><a href="#ve-dphq">Về Đông Phương Học Quán</a></li>
            <li><a href="#lo-trinh">Lộ trình học</a></li>
            <li><a href="#faq">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h3>Địa chỉ</h3>
          <p>{CONTACT.address}</p>
        </div>

        <div>
          <h3>Liên hệ</h3>
          <p>
            Hotline: <a href={CONTACT.hotlineHref}>{CONTACT.hotline}</a>
          </p>
          <p>
            Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </div>

      <div className="container footer-copy">
        <p>© 2026 {BRAND.name}. Khóa Khai - Dụng - Thông.</p>
      </div>
    </footer>
  )
}
