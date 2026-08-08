type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  titleAccent?: string
  lead?: string
  italicLead?: boolean
  center?: boolean
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  lead,
  italicLead = false,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-head${center ? ' center' : ''}`.trim()}>
      <p className={`eyebrow${light ? ' light' : ''}`.trim()}>{eyebrow}</p>
      <h2>
        {title}
        {titleAccent ? (
          <>
            <br />
            <span className="title-accent">{titleAccent}</span>
          </>
        ) : null}
      </h2>
      {lead ? (
        <p className={`lead${italicLead ? ' italic' : ''}`.trim()}>{lead}</p>
      ) : null}
    </header>
  )
}
