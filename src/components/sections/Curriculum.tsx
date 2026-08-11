import { BrandMark } from '../ui/Brand'
import { RegisterButton } from '../registration/RegisterButton'
import { Reveal } from '../ui/Reveal'

const FACULTY_DESC =
  'Đội ngũ giảng viên tốt nghiệp chuyên ngành Ngôn ngữ Trung Quốc và Sư phạm tiếng Trung tại các trường đại học uy tín ở Việt Nam và Trung Quốc, được đào tạo thống nhất về chương trình và phương pháp giảng dạy.'

export function Curriculum() {
  return (
    <section className="section curriculum">
      <div className="curr-hero">
        <div
          className="curr-hero-bg"
          style={{
            backgroundImage:
              "url('/hero/mo.png')",
          }}
        />
        <div className="container curr-hero-content">
          <p className="eyebrow light">Giáo trình & Giảng viên</p>
          <h1>Giáo trình tinh gọn</h1>
        </div>
      </div>

      <div className="container curr-body">
        <div className="curr-compare">
          <p className="curr-desc">
            Giáo trình được phát triển và tinh gọn dựa trên bộ New HSK Course, giúp tiếp cận HSK
            3.0 dễ dàng hơn mà vẫn đủ 5 kỹ năng.
          </p>
          <div className="compare-cards">
            <div className="compare-card old">
              <span>HSK 2.0 – Cấp 1</span>
              <strong>150</strong>
              <em>Từ vựng chặng 1</em>
            </div>
            <div className="compare-card new">
              <span>HSK 3.0 – Cấp 1</span>
              <strong>300</strong>
              <em>Từ vựng tinh gọn</em>
            </div>
          </div>
        </div>

        <div className="faculty-row">
          <Reveal className="faculty-bar">
            <div className="faculty-brand">
              <BrandMark className="sm" />
              <div>
                <strong>Đội ngũ giảng viên Đông Phương Học Quán</strong>
                <p>Chuyên ngành Ngôn ngữ Trung Quốc & Sư phạm tiếng Trung</p>
              </div>
            </div>
            <div className="faculty-detail">
              <p>{FACULTY_DESC}</p>
              <div className="faculty-tags">
                <span>Chuyên ngành Ngôn ngữ Trung</span>
                <span>Nắm rõ chương trình</span>
                <span>Đồng hành sát sao</span>
              </div>
            </div>
          </Reveal>
          <RegisterButton variant="solid" className="faculty-cta">
            Nhận tư vấn về giáo trình
          </RegisterButton>
        </div>
      </div>
    </section>
  )
}
