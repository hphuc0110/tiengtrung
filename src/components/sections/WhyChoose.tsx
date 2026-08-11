import { FEATURES } from '../../data/content'
import { FeatureIcon } from '../ui/FeatureIcon'
import { Reveal } from '../ui/Reveal'

export function WhyChoose() {
  return (
    <section className="section why" id="ve-dphq">
      <div className="container">
        <div className="why-top">
          <div className="why-copy">
            <p className="eyebrow">Vì sao chọn khóa học này</p>
            <h1>Học chắc nền tảng, đúng nhịp, không bị ngợp</h1>
            <p className="lead italic">
              Thiết kế riêng cho người bắt đầu từ số 0, đi làm hoặc đi học vẫn theo được: ưu tiên
              sự vững chắc, không đánh đổi tốc độ.
            </p>
          </div>
          <div className="why-photo">
            <img
              src="/hero/giangday.png"
              alt="Giảng viên hướng dẫn trên bảng tương tác"
              loading="lazy"
            />
          </div>
        </div>

        <div className="feature-row">
          {FEATURES.map((feature, index) => (
            <Reveal as="article" className="feature-card" key={feature.id} delayMs={index * 80}>
              <div className="feature-icon">
                <FeatureIcon name={feature.icon} />
              </div>
              <div className="feature-body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
