export type RoadmapItem = {
  id: string
  kind: 'stage' | 'workshop'
  pill: string
  timing: string
  title: string
  description: string
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: 'hsk1-intro',
    kind: 'stage',
    pill: 'HSK 1',
    timing: 'Nhập môn: 3 buổi',
    title: 'Nhập môn',
    description:
      'Chủ đề chính: Thanh mẫu – vận mẫu – 4 thanh điệu – cấu trúc âm tiết; nhóm âm khó & bộ thủ, quy tắc chính tả Pinyin; âm uốn lưỡi, 8 nét cơ bản & Lục thư.',
  },
  {
    id: 'hsk1-1-5',
    kind: 'stage',
    pill: 'HSK 1',
    timing: 'Bài 1 – Bài 5',
    title: 'Mở đầu',
    description:
      'Chủ đề chính: Chào hỏi; giới thiệu tên; giới thiệu quốc tịch; gia đình con cái; thời gian nghỉ ngơi.',
  },
  {
    id: 'hsk1-6-10',
    kind: 'stage',
    pill: 'HSK 1',
    timing: 'Bài 6 – Bài 10',
    title: 'Mở rộng vốn từ',
    description:
      'Chủ đề chính: Số điện thoại; giờ tan làm; nghề nghiệp; địa điểm học tập; mua sắm, hỏi giá cả.',
  },
  {
    id: 'hsk1-11-15',
    kind: 'stage',
    pill: 'HSK 1',
    timing: 'Bài 11 – Bài 15',
    title: 'Hoàn thiện HSK 1',
    description:
      'Chủ đề chính: Đang học đại học; thời tiết; gọi đồ uống; xem phim; tạm biệt ở sân bay.',
  },
  {
    id: 'hsk1-review',
    kind: 'stage',
    pill: 'HSK 1',
    timing: 'Ôn tập và kiểm tra',
    title: 'Ôn tập và kiểm tra',
    description: 'Ôn tập hệ thống 15 bài HSK1, làm bài kiểm tra.',
  },
  {
    id: 'hsk2-1-5',
    kind: 'stage',
    pill: 'HSK 2',
    timing: 'Bài 1 – Bài 5',
    title: 'Mở đầu',
    description:
      'Chủ đề chính: Mời ăn vịt quay Bắc Kinh; gọi taxi; du lịch Tây An; trang phục; thăm nhà bạn.',
  },
  {
    id: 'hsk2-6-10',
    kind: 'stage',
    pill: 'HSK 2',
    timing: 'Bài 6 – Bài 10',
    title: 'Mở rộng vốn từ',
    description:
      'Chủ đề chính: Chúc mừng sinh nhật, hoạt động thể thao, so sánh kích thước, kế hoạch thi cử.',
  },
  {
    id: 'hsk2-11-15',
    kind: 'stage',
    pill: 'HSK 2',
    timing: 'Bài 11 – Bài 15',
    title: 'Hoàn thiện HSK 2',
    description:
      'Chủ đề chính: Món ăn yêu thích, sự khác biệt khí hậu, phong tục ngày Tết & du lịch.',
  },
  {
    id: 'hsk2-review',
    kind: 'stage',
    pill: 'HSK 2',
    timing: 'Ôn tập và kiểm tra',
    title: 'Ôn tập và kiểm tra',
    description:
      'Kiểm tra lại kiến thức HSK2, ôn tập đạt chuẩn đầu ra, sẵn sàng lên HSK3.',
  },
  {
    id: 'hsk3-1-5',
    kind: 'stage',
    pill: 'HSK 3',
    timing: 'Bài 1 – Bài 5',
    title: 'Mở đầu',
    description:
      'Chủ đề chính: Đón người/Thất lạc hành lý tại sân bay, gọi món ăn, tìm/thuê nhà, trải nghiệm du lịch.',
  },
  {
    id: 'hsk3-6-10',
    kind: 'stage',
    pill: 'HSK 3',
    timing: 'Bài 6 – Bài 10',
    title: 'Mở rộng vốn từ',
    description:
      'Chủ đề chính: Trải nghiệm giao thông hiện đại, mua sắm, chăm sóc sức khỏe, thi cử.',
  },
  {
    id: 'hsk3-11-18',
    kind: 'stage',
    pill: 'HSK 3',
    timing: 'Bài 11 – Bài 18',
    title: 'Hoàn thiện HSK 3',
    description:
      'Chủ đề chính: Giải quyết vấn đề; thời tiết thất thường; hàng xóm mới; mượn sách; quan điểm cá nhân; tin tức xã hội; lời khuyên học tập; gói sủi cảo.',
  },
  {
    id: 'hsk3-review',
    kind: 'stage',
    pill: 'HSK 3',
    timing: 'Ôn tập và kiểm tra',
    title: 'Ôn tập và kiểm tra',
    description: 'Ôn tập tổng hợp, làm đề format HSK3 chuẩn 3.0.',
  },
]
