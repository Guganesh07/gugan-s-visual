import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../api.js'

export default function OrderModal({ shoot, onClose }) {
  const navigate = useNavigate()
  const [tier, setTier] = useState(shoot.budgets[0].tier)
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', location: '', notes: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const selectedBudget = shoot.budgets.find((b) => b.tier === tier)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.date) {
      setError('Please fill name, phone and preferred date.')
      return
    }
    setSubmitting(true)
    setError('')

    const result = await createOrder({
      shootId: shoot.id,
      shootTitle: shoot.title,
      tier,
      price: selectedBudget.price,
      ...form
    })

    setSubmitting(false)
    if (result.ok) {
      navigate('/my-orders')
    } else {
      setError('Something went wrong placing your order. Please try again.')
    }
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="order-card__frame">FRAME {shoot.frame}</p>
        <h2>Book: {shoot.title}</h2>

        <div className="modal__tiers">
          {shoot.budgets.map((b) => (
            <button
              key={b.tier}
              type="button"
              className={'modal__tier' + (tier === b.tier ? ' modal__tier--active' : '')}
              onClick={() => setTier(b.tier)}
            >
              <span>{b.tier}</span>
              <strong>{b.price}</strong>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="modal__form">
          <label>
            Full name
            <input value={form.name} onChange={update('name')} placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input value={form.phone} onChange={update('phone')} placeholder="10-digit mobile number" />
          </label>
          <label>
            Email (optional)
            <input value={form.email} onChange={update('email')} placeholder="you@example.com" type="email" />
          </label>
          <label>
            Preferred date
            <input value={form.date} onChange={update('date')} type="date" />
          </label>
          <label>
            Location
            <input value={form.location} onChange={update('location')} placeholder="City / venue" />
          </label>
          <label>
            Notes (optional)
            <textarea value={form.notes} onChange={update('notes')} rows={2} placeholder="Anything we should know" />
          </label>

          {error && <p className="modal__error">{error}</p>}

          <button type="submit" className="order-card__cta" disabled={submitting}>
            {submitting ? 'Placing order…' : `Confirm order — ${selectedBudget.price}`}
          </button>
        </form>
      </div>
    </div>
  )
}
