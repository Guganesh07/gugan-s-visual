import { useState } from 'react'
import { SHOOTS } from '../data/shoots.js'
import OrderCard from './OrderCard.jsx'
import OrderModal from './OrderModal.jsx'

export default function Home() {
  const [activeShoot, setActiveShoot] = useState(null)

  return (
    <section className="home" id="home">
      <div className="home__hero">
        <p className="home__eyebrow">Frame 0000 — Gugan's visual photography</p>
        <h1>
          Six kinds of light.
          <br />
          One way of seeing.
        </h1>
        <p className="home__lede">
          Pick the moment you want kept. Every package below shows exactly what you get and what
          it costs — choose a budget tier and place your order in under a minute.
        </p>
      </div>

      <div className="home__grid">
        {SHOOTS.map((shoot) => (
          <OrderCard key={shoot.id} shoot={shoot} onOrder={() => setActiveShoot(shoot)} />
        ))}
      </div>

      {activeShoot && <OrderModal shoot={activeShoot} onClose={() => setActiveShoot(null)} />}
    </section>
  )
}
