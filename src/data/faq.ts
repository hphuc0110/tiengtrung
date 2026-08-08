export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'schedule',
    question: 'Khóa Hán Ngữ Nền Tảng học vào những ngày nào?',
    answer:
      'Lịch học chính khóa rơi vào Thứ 2, Thứ 4 và Thứ 6 hàng tuần (19h30 đến 21h30). Hình thức: trực tuyến qua Zoom, dễ dàng sắp xếp thời gian. Ngoài ra, trung tâm còn tổ chức thêm các buổi workshop định kỳ vào thứ 7 (14h–16h) để cả lớp cùng trải nghiệm văn hóa và ôn lại kiến thức đã học.',
  },
  {
    id: 'beginner',
    question: 'Mình chưa biết gì về tiếng Trung, liệu có theo kịp không?',
    answer:
      'Hoàn toàn yên tâm — khóa học được thiết kế dành riêng cho người bắt đầu từ con số 0. Vài buổi đầu tiên sẽ tập trung vào ngữ âm Pinyin và cách viết chữ Hán trước khi bước vào bài học chính thức. Và ngay sau buổi 3 còn có workshop “Câu chuyện bộ thủ” để giúp bạn chuẩn hóa phát âm ngay từ những bước đi đầu tiên.',
  },
  {
    id: 'miss-class',
    question: 'Nếu bận không vào học đúng giờ qua Zoom được thì sao?',
    answer:
      'Bạn không cần quá lo lắng về việc này. Mọi buổi học qua Zoom đều được ghi hình lại đầy đủ, nên nếu lỡ hẹn hôm đó bạn vẫn có thể xem lại bất cứ lúc nào phù hợp. Mô hình học Online kết hợp Offline của trung tâm cũng được xây dựng để việc chuyển đổi giữa hai hình thức diễn ra mượt mà, không khiến bạn cảm thấy hụt nhịp.',
  },
  {
    id: 'uni',
    question: 'Có chứng chỉ HSK3 rồi thì được lợi gì khi xét tuyển đại học?',
    answer:
      'Đây cũng là một trong những lý do nhiều bạn học sinh chọn học sớm. Thí sinh có chứng chỉ HSK từ cấp độ 3 trở lên sẽ được miễn thi tốt nghiệp THPT môn Ngoại ngữ, và tùy theo đề án tuyển sinh từng năm, nhiều trường đại học tại Hà Nội còn quy đổi HSK3 sang điểm xét tuyển tương đương khoảng 6.0–9.5 điểm.',
  },
  {
    id: 'fee',
    question: 'Học phí và ưu đãi hiện tại của khóa như thế nào?',
    answer:
      'Học phí và các ưu đãi sẽ thay đổi theo từng đợt tuyển sinh, nên để có thông tin chính xác và mới nhất, bạn cứ để lại thông tin liên hệ ở form đăng ký. Đội ngũ tư vấn sẽ chủ động liên hệ và gửi bảng chi tiết trong thời gian sớm nhất.',
  },

]
