export default function OrderCard({ shoot, onOrder }) {
  return (
    <article className="order-card">
      <img
        className="order-card__image"
        src={`order-card-cover-images/${shoot.id}-cover.jpg`}
        alt={shoot.title}
        loading="lazy"
      />

      <div className="order-card__body">
        <p className="order-card__frame">FRAME {shoot.frame}</p>
        <h2>{shoot.title}</h2>
        <p className="order-card__tagline">{shoot.tagline}</p>

        <p className="order-card__meta-line">
          {shoot.duration} · {shoot.delivery}
        </p>

        <ul className="order-card__budgets">
          {shoot.budgets.map((b) => (
            <li key={b.tier}>
              <span className="order-card__tier">{b.tier}</span>
              <span className="order-card__price">{b.price}</span>
            </li>
          ))}
        </ul>

        <button className="order-card__cta" onClick={onOrder}>
          Book your order now  !
        </button>
      </div>
    </article>
  )
}
