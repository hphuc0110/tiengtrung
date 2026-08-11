export type ScheduleDay = {
  day: string
  time: string
  tag: string
  highlight?: boolean
}

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { day: 'Thứ 2', time: '19h30–21h30', tag: '' },
  { day: 'Thứ 4', time: '19h30–21h30', tag: '' },
  { day: 'Thứ 6', time: '19h30–21h30', tag: '' },
  { day: 'Thứ 7', time: 'Workshop 14h–16h', tag: '', highlight: true },
]

export const SCHEDULE_WORKSHOP_NOTE =
  'Định kỳ có workshop thứ 7 (14h–16h): trải nghiệm văn hóa Trung Hoa và ôn tập cuối chặng, tổ chức trực tiếp tại trung tâm, xen kẽ trong suốt lộ trình 60 buổi.'

export const SCHEDULE_FOOTER_NOTE =
  'Thứ 2 – 4 – 6, 19h30 – 21h30: học chính khóa online qua Zoom, có ghi hình để xem lại bất cứ lúc nào.'
