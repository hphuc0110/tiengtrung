export type Workshop = {
  id: number
  meta: string
  title: string
  description: string
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    meta: 'Workshop 1 · Sau buổi 3',
    title: 'Câu chuyện bộ thủ & Chuẩn hóa phát âm',
    description:
      'Luyện chữ Hán, chỉnh phát âm, cài bàn phím tiếng Trung và thực hành gõ Pinyin.',
  },
  {
    id: 2,
    meta: 'Workshop 2 · Sau buổi 11',
    title: 'Trải nghiệm cắt giấy & Văn hóa Trung Hoa',
    description:
      'Ôn tập bài 1–8, sửa lỗi phát âm và giải đáp thắc mắc của học viên.',
  },
  {
    id: 3,
    meta: 'Workshop 3 · Sau buổi 18',
    title: 'Luyện đề thực chiến HSK 1',
    description:
      'Ôn bài 9–15 và luyện tập theo đúng định dạng đề thi HSK1.',
  },
  {
    id: 4,
    meta: 'Workshop 4 · Sau buổi 25',
    title: 'Sắc màu Thư pháp & Hệ thống bổ ngữ HSK2',
    description:
      'Ôn tổng hợp bài 1–7, hệ thống hóa các loại bổ ngữ, trải nghiệm viết thư pháp.',
  },
  {
    id: 5,
    meta: 'Workshop 5 · Sau buổi 33',
    title: 'Giao tiếp thực tế & Ôn tập HSK 2',
    description:
      'Luyện phản xạ hội thoại theo chủ đề đời sống và làm đề mẫu HSK2.',
  },
  {
    id: 6,
    meta: 'Workshop 6 · Sau buổi 42',
    title: 'Văn hóa trà & Mở rộng HSK 3',
    description:
      'Trải nghiệm văn hóa trà, củng cố ngữ pháp phức tạp trước khi hoàn thiện HSK3.',
  },
  {
    id: 7,
    meta: 'Workshop 7 · Sau buổi 51',
    title: 'Luyện đề HSK 3 + HSKK Sơ cấp',
    description:
      'Thi thử tổng hợp, chỉnh lỗi phát âm và chiến lược làm bài thi thực chiến.',
  },
]
