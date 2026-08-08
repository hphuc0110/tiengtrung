import { SPACE_POINTS } from '../../data/content'
import { RegisterButton } from '../registration/RegisterButton'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function LearningSpace() {
  return (
    <section className="section space">
      <div className="container">
        <SectionHeading
          eyebrow="Không gian học"
          title={
            <>
              Lớp học nhỏ,
              <br />
              không gian tập trung
            </>
          }
        />
        <div className="space-grid">
          <div className="space-left">
            <div className="space-photo">
              <img
                src="/hero/Background.png"
                alt="Không gian học tại Đông Phương Học Quán"
                loading="lazy"
              />
            </div>
            <div className="space-cta">
              <RegisterButton variant="outline">
                Nhận thông tin về cơ sở vật chất
              </RegisterButton>
            </div>
          </div>
          <ul className="space-list">
            {SPACE_POINTS.map((point, index) => (
              <Reveal as="li" key={point} delayMs={index * 50}>
                {point}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
