import { WORKSHOPS } from '../../data/workshops'
import { RegisterButton } from '../registration/RegisterButton'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Workshops() {
  return (
    <section className="section workshops">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Hành trình trải nghiệm"
          title="Chuỗi 7 Workshop"
        />
        <div className="workshop-track" tabIndex={0}>
          {WORKSHOPS.map((ws, index) => (
            <Reveal
              as="article"
              className={`ws-card${index === 2 ? ' featured' : ''}`}
              key={ws.id}
              delayMs={Math.min(index * 60, 360)}
            >
              <p className="ws-meta">{ws.meta}</p>
              <h3>{ws.title}</h3>
              <p className="ws-desc">{ws.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="section-cta">
          <RegisterButton variant="outline">
            Nhận thông tin về Workshop
          </RegisterButton>
        </div>
      </div>
    </section>
  )
}
