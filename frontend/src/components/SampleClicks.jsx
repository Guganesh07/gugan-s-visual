import { useState } from 'react'
import { SHOOTS } from '../data/shoots.js'

// Picsum gives stable placeholder photography per seed — swap these src
// values for real shoot photos when you have them.
function imagesFor(id) {
  return [
    `/sample-clicks/${id}-1.jpg`,
    `/sample-clicks/${id}-2.jpg`
  ]
}

export default function SampleClicks() {
  const [slide, setSlide] = useState({})

  const move = (id, dir, len) => {
    setSlide((s) => {
      const current = s[id] ?? 0
      const next = (current + dir + len) % len
      return { ...s, [id]: next }
    })
  }

  return (
    <section className="sample-clicks" id="sample-clicks">
      <p className="home__eyebrow">Contact sheet</p>
      <h1>Sample Clicks</h1>
      <p className="home__lede">
        See the sample Pics from each shoot type. Swipe through a category to see the look and feel before
        you book.
      </p>

      <div className="sample-clicks__grid">
        {SHOOTS.map((shoot) => {
          const images = imagesFor(shoot.id)
          const active = slide[shoot.id] ?? 0
          return (
            <div className="contact-sheet" key={shoot.id}>
              <div className="contact-sheet__head">
                <p className="order-card__frame">FRAME {shoot.frame}</p>
                <h2>{shoot.title}</h2>
              </div>

              <div className="contact-sheet__viewport">
                <div
                  className="contact-sheet__track"
                  style={{ transform: `translateX(-${active * 100}%)` }}
                >
                  {images.map((src, i) => (
                    <img key={i} src={src} alt={`${shoot.title} sample ${i + 1}`} loading="lazy" />
                  ))}
                </div>

                <button
                  className="contact-sheet__nav contact-sheet__nav--prev"
                  onClick={() => move(shoot.id, -1, images.length)}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  className="contact-sheet__nav contact-sheet__nav--next"
                  onClick={() => move(shoot.id, 1, images.length)}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </div>

              <div className="contact-sheet__dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={'contact-sheet__dot' + (i === active ? ' contact-sheet__dot--active' : '')}
                    onClick={() => setSlide((s) => ({ ...s, [shoot.id]: i }))}
                    aria-label={`Show photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
