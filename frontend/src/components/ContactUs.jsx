const PHONE = '+91 9597688310'
const PHONE_DIAL = '+919597688310'
const WHATSAPP = 'https://wa.me/919597688310?text=Hi%20Shutterline%20Studio%2C%20I%27d%20like%20to%20know%20more%20about%20your%20shoots'
const EMAIL = 'guganguganesh0@gmail.com'

export default function ContactUs() {
  return (
    <section className="contact" id="contact">
      <p className="home__eyebrow">Frame 0000 — Get in touch</p>
      <h1>Contact us</h1>
      <p className="home__lede">Tell us your date and the shoot you have in mind — we usually reply within the hour.</p>

      <div className="contact__grid">
        <a className="contact__card" href={`tel:${PHONE_DIAL}`}>
          <span className="contact__icon" aria-hidden="true">☎</span>
          <span className="contact__label">Call us</span>
          <span className="contact__value">{PHONE}</span>
        </a>

        <a className="contact__card" href={WHATSAPP} target="_blank" rel="noreferrer">
          <span className="contact__icon" aria-hidden="true">💬</span>
          <span className="contact__label">WhatsApp</span>
          <span className="contact__value">Start a chat</span>
        </a>

        <a className="contact__card" href={`mailto:${EMAIL}`}>
          <span className="contact__icon" aria-hidden="true">✉</span>
          <span className="contact__label">Email</span>
          <span className="contact__value">{EMAIL}</span>
        </a>
      </div>
    </section>
  )
}
