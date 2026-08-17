export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'schedule',
    question: 'Khóa Khai - Dụng - Thông học vào những ngày nào?',
    answer:
      'Lịch học chính khóa vào Thứ 3 và Thứ 6 hàng tuần (19h30 đến 21h30). Hình thức học trực tuyến, dễ dàng sắp xếp thời gian.',
  },
  {
    id: 'beginner',
    question: 'Mình chưa biết gì về tiếng Trung, liệu có theo kịp không?',
    answer:
      'Hoàn toàn yên tâm — khóa học được thiết kế dành riêng cho người bắt đầu từ con số 0. Các buổi nhập môn sẽ tập trung vào ngữ âm và cách viết chữ Hán trước khi bước vào bài học chính thức.',
  },
  {
    id: 'miss-class',
    question: 'Nếu bận không vào học đúng giờ để học trực tuyến được thì sao?',
    answer:
      'Bạn không cần quá lo lắng về việc này. Mọi buổi học đều được ghi hình lại đầy đủ, nên nếu lỡ hẹn hôm đó bạn vẫn có thể xem lại bất cứ lúc nào phù hợp.',
  },
  {
    id: 'uni',
    question: 'Chứng chỉ HSK 3 giúp ích gì?',
    answer:
      'Không chỉ là chứng chỉ đánh giá năng lực tiếng Trung, HSK 3 còn giúp người học xây dựng nền tảng giao tiếp cơ bản và tạo thêm lợi thế khi xét tuyển đại học, tìm kiếm việc làm. Từ học sinh, sinh viên đến người đi làm, người mới bắt đầu chuyển hướng nghề nghiệp đều có thể sử dụng HSK 3 như một bước đệm để mở rộng cơ hội trong các công việc có yêu cầu tiếng Trung như hành chính, chăm sóc khách hàng, kinh doanh, xuất nhập khẩu, du lịch, dịch vụ và nhiều lĩnh vực khác.',
  },
  {
    id: 'fee',
    question: 'Học phí và ưu đãi hiện tại của khóa như thế nào?',
    answer:
      'Học phí và các ưu đãi sẽ thay đổi theo từng đợt tuyển sinh, nên để có thông tin chính xác và mới nhất, bạn cứ để lại thông tin liên hệ ở form đăng ký. Đội ngũ tư vấn sẽ chủ động liên hệ và gửi bảng chi tiết trong thời gian sớm nhất.',
  },

]
