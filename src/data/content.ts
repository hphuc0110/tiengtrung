export type Feature = {
  id: string
  title: string
  description: string
  icon: 'book' | 'teacher' | 'workshop'
}

export const FEATURES: Feature[] = [
  {
    id: 'curriculum',
    icon: 'book',
    title: 'Giáo trình tinh gọn',
    description:
      'Được phát triển và tinh gọn dựa trên bộ New HSK Course, đủ 5 kỹ năng Nghe – Nói – Đọc – Viết – Dịch, giúp dễ tiếp cận mà vẫn bám sát chuẩn thi mới.',
  },
  {
    id: 'teachers',
    icon: 'teacher',
    title: 'Giảng viên giàu kinh nghiệm',
    description:
      'Đội ngũ giảng viên chuyên ngành Ngôn ngữ và Sư phạm tiếng Trung, được đào tạo thống nhất về chương trình và phương pháp giảng dạy, đồng hành sát sao từng học viên.',
  },
  {
    id: 'workshops',
    icon: 'workshop',
    title: 'Đội ngũ trợ giảng kinh nghiệm',
    description:
      'Với đội ngũ trợ giảng đến từ các trường đào tạo ngoại ngữ top đầu, có chứng chỉ HSK. Có nhiều kinh nghiệm trong việc gia sư, giảng dạy tiếng Trung.',
  },
]

export const SPACE_POINTS = [
  'Sĩ số giới hạn 10–15 học viên/lớp, giáo viên theo sát từng cá nhân',
  'Học qua Zoom bản quyền, ghi hình toàn bộ buổi học để xem lại',
  'Workshop trực tiếp tại trung tâm vào thứ 7 hàng tuần (định kỳ)',
  'Tài liệu bản mềm do giảng viên biên soạn, cập nhật theo HSK 3.0, gửi qua email/nhóm lớp',
  'Trải nghiệm chuyển tiếp Online–Offline mượt mà, không lệch nhịp học',
] as const

export const HERO_THUMBS = [
  {
    src: '/hero/1.jpg',
    alt: 'Lớp học online qua Zoom',
    caption: 'Lớp học online',
  },
  {
    src: '/hero/2.png',
    alt: 'Workshop văn hóa',
    caption: 'Workshop văn hóa',
  },
  {
    src: '/hero/3.jpg',
    alt: 'Giáo trình HSK 3.0',
    caption: 'Giáo trình chuẩn HSK 3.0',
  },
] as const

export const HERO_BULLET =
  ''
