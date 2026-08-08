import { RegisterButton } from '../registration/RegisterButton'

export function FinalCTA() {
  return (
    <section className="final-cta" id="dang-ky">
      <div className="final-cta-bg" aria-hidden="true">
        <span className="cta-char">启</span>
        <span className="cta-char">程</span>
        <div className="cta-mountain" />
        <div className="cta-tree" />
        <div className="cta-seal" />
      </div>

      <div className="container final-cta-inner">
        <h2>Bắt đầu hành trình từ hôm nay</h2>
        <p className="final-lead">
          Để lại thông tin, đội ngũ Đông Phương Học Quán sẽ tư vấn lộ trình phù hợp và lịch khai
          giảng gần nhất cho khóa Hán Ngữ Nền Tảng.
        </p>
        <RegisterButton variant="light" className="final-cta-btn">
          Đăng ký ngay
        </RegisterButton>
      </div>
    </section>
  )
}
