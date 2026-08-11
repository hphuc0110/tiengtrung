import { HERO_BULLET, HERO_THUMBS } from '../../data/content'
import { RegisterButton } from '../registration/RegisterButton'
import { Button } from '../ui/Button'

const [onlineCard, curriculumCard] = HERO_THUMBS.filter(
  (t) => t.caption !== 'Workshop văn hóa',
)

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-char c1">学</span>
        <span className="hero-char c2">汉</span>
        <span className="hero-char c3">语</span>
        <span className="hero-char c4">文</span>
        <span className="hero-char c5">道</span>
        <div className="hero-tree" />
        <div className="hero-seal" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-heading">
            <span className="hero-title-wrap">
              <span className="hero-title">Khóa Hán Ngữ</span>
            </span>
            <span className="hero-title-wrap">
              <span className="hero-title hero-title-light">"Khai-Dụng-Thông"</span>
            </span>
          </h1>
          <p className="hero-sub">
            Từ chưa biết một chữ Hán đến vững <strong>HSK3 + HSKK Sơ cấp</strong>
          </p>
          <ul className="hero-bullets">
            <li>
              {HERO_BULLET} Lộ trình 60 buổi, Học 2 buổi/tuần (Thứ 3 – 6, 19h30–21h30) trên bộ
              giáo trình New HSK 3.0 tinh gọn.
            </li>
          </ul>

          <div className="hero-cards">
            <figure className="hero-card hero-card-online">
              <div className="hero-card-copy">
                <strong>{onlineCard.caption}</strong>
                <em>Linh hoạt, dễ dàng sắp xếp thời gian</em>
              </div>
              <img src={onlineCard.src} alt={onlineCard.alt} loading="lazy" />
            </figure>
            <figure className="hero-card hero-card-curriculum">
              <figcaption>{curriculumCard.caption}</figcaption>
              <img src={curriculumCard.src} alt={curriculumCard.alt} loading="lazy" />
            </figure>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="/hero.png"
              alt="Học viên Đông Phương Học Quán với giáo trình HSK"
            />
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">60</span>
                <strong>Buổi học</strong>
                <span>120p/buổi</span>
              </div>
              <div className="hero-stat hero-stat-schedule">
                <div className="hero-stat-days">
                  <strong>Thứ 3</strong>
                  <strong>Thứ 6</strong>
                </div>
                <span>19h30 – 21h30</span>
              </div>
            </div>
          </div>

          <div className="hero-ctas">
            <RegisterButton variant="light">Đăng ký tư vấn lộ trình</RegisterButton>
            <Button href="#lo-trinh" variant="outline-light">
              Xem lộ trình chi tiết ↓
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
