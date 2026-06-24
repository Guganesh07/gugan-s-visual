const RATINGS = [
  { label: 'Overall rating', value: 4.8, of: 5 },
  { label: 'On-time delivery', value: 4.9, of: 5 },
  { label: 'Would recommend', value: 96, of: 100, suffix: '%' }
]

const REVIEWS = [
  { name: 'Priya & Karthik', shoot: 'Marriage Shoot', text: 'Calm, unobtrusive and the candids were better than our posed shots.' },
  { name: 'Anitha R.', shoot: 'Puberty Function', text: 'Family portraits turned out warm and natural — no awkward posing.' },
  { name: 'Dev Studio Models', shoot: 'Model Shoot', text: 'Lighting and retouching were portfolio-grade. Booked them again.' }
]

export default function About() {
  return (
    <section className="about" id="about">
      <p className="home__eyebrow">Frame 0000 — Behind the lens</p>
      <h1>About our work</h1>
      <p className="home__lede">
        Gugan's visual photgraphy has spent the last eight years photographing birthdays, weddings,
        portfolios and ceremonies across the city. We shoot candid first, posed second — the goal
        is always a photo you'd actually want to look at twice.
      </p>

      <div className="about__ratings">
        {RATINGS.map((r) => (
          <div className="about__rating-card" key={r.label}>
            <strong>
              {r.value}
              {r.suffix ?? `/${r.of}`}
            </strong>
            <span>{r.label}</span>
          </div>
        ))}
      </div>

      <h2 className="about__subhead">What clients say</h2>
      <div className="about__reviews">
        {REVIEWS.map((r) => (
          <blockquote key={r.name} className="about__review">
            <p>"{r.text}"</p>
            <footer>
              — {r.name}, <cite>{r.shoot}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
