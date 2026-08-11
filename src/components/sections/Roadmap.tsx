import { ROADMAP } from '../../data/roadmap'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Roadmap() {
  return (
    <section className="section roadmap" id="lo-trinh">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Lộ trình học"
          title="Ba chặng HSK"
          titleAccent="từ số 0 đến HSK3"
          lead="Lộ trình bám sát giáo trình New HSK 3.0, chia theo từng cấp độ với các chặng ôn tập và kiểm tra cuối mỗi level."
          italicLead
        />

        <div className="timeline">
          {ROADMAP.map((item) => (
            <Reveal
              as="article"
              key={item.id}
              className={`tl-item ${item.kind}`}
            >
              <div className={`tl-dot${item.kind === 'workshop' ? ' half' : ''}`} />
              <div className={`tl-content${item.kind === 'workshop' ? ' ws-box' : ''}`}>
                <div className="tl-meta">
                  <span className="pill">{item.pill}</span>
                  <span>{item.timing}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="duration-banner">
          <span>
            Khóa học Hán ngữ
            <br />
            Khai – Dụng – Thông
          </span>
          <strong>HSK 1 → HSK 2 → HSK 3</strong>
        </Reveal>
      </div>
    </section>
  )
}
