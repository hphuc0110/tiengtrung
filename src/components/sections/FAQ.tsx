import { useState } from 'react'
import { FAQ_ITEMS } from '../../data/faq'
import { RegisterButton } from '../registration/RegisterButton'
import { Reveal } from '../ui/Reveal'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  return (
    <section className="section faq" id="faq">
      <div className="container faq-top-cta">
        <RegisterButton variant="outline">
          Nhận tư vấn lộ trình chi tiết
        </RegisterButton>
      </div>

      <div className="container faq-grid">
        <header className="section-head sticky-head">
          <p className="eyebrow">Giải đáp</p>
          <h2>Câu hỏi thường gặp</h2>
        </header>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const open = openId === item.id
            return (
              <Reveal className={`faq-item${open ? ' is-open' : ''}`} key={item.id}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  {item.question}
                  <span className={`faq-chevron${open ? ' open' : ''}`} aria-hidden="true">
                    <svg viewBox="0 0 12 8" width="12" height="8">
                      <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {open ? (
                  <div className="faq-body">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="container faq-cta">
        <RegisterButton variant="outline">
          Vẫn còn thắc mắc? Nhận tư vấn
        </RegisterButton>
      </div>
    </section>
  )
}
