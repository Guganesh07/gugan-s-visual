import { useEffect, useState } from 'react'
import { fetchOrders } from '../api.js'

export default function MyOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data)
      setLoading(false)
    })
  }, [])

  return (
    <section className="my-orders">
      <p className="home__eyebrow">Frame 0000 — Order log</p>
      <h1>My Orders</h1>

      {loading && <p className="home__lede">Loading your orders…</p>}

      {!loading && orders.length === 0 && (
        <p className="home__lede">No orders yet. Book a shoot from the Home page to see it here.</p>
      )}

      <div className="my-orders__list">
        {orders.map((order) => (
          <article className="my-orders__card" key={order._id}>
            <div className="my-orders__success">
              <span aria-hidden="true">✓</span>
              Your order is successful — the photographer will reach you soon.
            </div>
            <h2>{order.shootTitle}</h2>
            <dl>
              <div>
                <dt>Package</dt>
                <dd>{order.tier} · {order.price}</dd>
              </div>
              <div>
                <dt>Preferred date</dt>
                <dd>{order.date}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{order.location || '—'}</dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>{order.name} · {order.phone}</dd>
              </div>
            </dl>
            <p className="my-orders__status">Status: {order.status || 'Pending confirmation'}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
