import { SCHEDULE_DAYS, SCHEDULE_FOOTER_NOTE, SCHEDULE_WORKSHOP_NOTE } from '../../data/schedule'
import { RegisterButton } from '../registration/RegisterButton'
import { Reveal } from '../ui/Reveal'

export function Schedule() {
  return (
    <section className="section schedule-wrap">
      <div className="container">
        <div className="schedule-box">
          <h2>Lịch học khóa Hán Ngữ Nền Tảng</h2>
          <div className="schedule-inner">
            <div className="schedule-grid">
              {SCHEDULE_DAYS.map((day, index) => (
                <Reveal
                  key={day.day}
                  className={`day-card${day.highlight ? ' highlight' : ''}`}
                  delayMs={index * 60}
                >
                  <span className="day">{day.day}</span>
                  <strong>{day.time}</strong>
                </Reveal>
              ))}
            </div>
            <div className="schedule-info">
              <p>{SCHEDULE_WORKSHOP_NOTE}</p>
            </div>
          </div>
          <p className="schedule-note">{SCHEDULE_FOOTER_NOTE}</p>
        </div>
        <div className="section-cta">
          <RegisterButton variant="outline">
            Nhận thông tin về khóa Hán Ngữ Nền Tảng
          </RegisterButton>
        </div>
      </div>
    </section>
  )
}
