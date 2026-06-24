// Central data for the six shoot categories the studio offers.
// `frame` is the film-roll frame number used as a visual/structural device
// across the site (order cards + contact-sheet slides).
export const SHOOTS = [
  {
    id: 'birthday',
    frame: '0001',
    title: 'Birthday Shoot',
    tagline: 'Candles, confetti, candid laughs.',
    description:
      'A relaxed, colourful session built around the cake-cutting moment, decor details and the guest of honour.',
    duration: '2 hours on location',
    delivery: '40 edited photos in 5 days with album',
    budgets: [
      { tier: 'Starter', price: '₹4,500', includes: '1 photographer, 2 hrs, 40 edits' },
      { tier: 'Classic', price: '₹7,500', includes: '1 photographer + assistant, 3 hrs, 70 edits' },
      { tier: 'Grand', price: '₹12,000', includes: '2 photographers, 4 hrs, 120 edits + reel' }
    ]
  },
  {
    id: 'marriage',
    frame: '0002',
    title: 'Marriage Shoot',
    tagline: 'Every ritual, every glance, kept.',
    description:
      'Full-day wedding coverage from getting-ready shots to the mandap and reception, candid plus traditional styles.',
    duration: 'Full day (up to 10 hrs)',
    delivery: '300+ edited photos in 15 days',
    budgets: [
      { tier: 'Essential', price: '₹25,000', includes: '1 day, 1 photographer, 200 edits' },
      { tier: 'Signature', price: '₹45,000', includes: '1 day, 2 photographers, 300 edits + highlight video' },
      { tier: 'Heritage', price: '₹75,000', includes: '2 days, 3 photographers, drone + cinematic film' }
    ]
  },
  {
    id: 'outdoor',
    frame: '0003',
    title: 'Outdoor Shoot',
    tagline: 'Open skies, natural light, real moments.',
    description:
      'Lifestyle and portrait sessions at parks, beaches, heritage streets or a location you choose.',
    duration: '1.5 hours at one location',
    delivery: '30 edited photos in 4 days',
    budgets: [
      { tier: 'Solo', price: '₹3,000', includes: '1 hr, 1 location, 25 edits' },
      { tier: 'Duo', price: '₹5,000', includes: '1.5 hrs, 1 location, 40 edits' },
      { tier: 'Explorer', price: '₹9,000', includes: '3 hrs, 2 locations, 70 edits' }
    ]
  },
  {
    id: 'model',
    frame: '0004',
    title: 'Model Shoot',
    tagline: 'Portfolio-ready, editorial finish.',
    description:
      'Studio or outdoor portfolio sessions with concept styling, lighting setups and look changes.',
    duration: '3 hours',
    delivery: '50 retouched photos in 6 days',
    budgets: [
      { tier: 'Lookbook', price: '₹6,000', includes: '2 hrs, 2 looks, 30 retouched' },
      { tier: 'Portfolio', price: '₹10,000', includes: '3 hrs, 3 looks, 50 retouched' },
      { tier: 'Editorial', price: '₹18,000', includes: '5 hrs, 5 looks, stylist + 80 retouched' }
    ]
  },
  {
    id: 'baby',
    frame: '0005',
    title: 'baby photo Shoot',
    tagline: 'A graceful record of the your baby.',
    description:
      'Coverage of your baby portraits, styled with festive decor.',
    duration: '3 hours on location',
    delivery: '60 edited photos in 5 days',
    budgets: [
      { tier: 'Basic', price: '₹6,000', includes: '2 hrs, 1 photographer, 40 edits' },
      { tier: 'Traditional', price: '₹9,500', includes: '3 hrs, 1 photographer + assistant, 60 edits' },
      { tier: 'Festive', price: '₹15,000', includes: '4 hrs, 2 photographers, 100 edits + album' }
    ]
  },
  {
    id: 'opening',
    frame: '0006',
    title: 'Grand Opening Ceremony',
    tagline: 'Launch-day coverage, start to finish.',
    description:
      'Ribbon-cutting, guests, decor and key speeches covered for shops, showrooms and offices.',
    duration: '2-3 hours on location',
    delivery: '50 edited photos in 4 days',
    budgets: [
      { tier: 'Compact', price: '₹5,500', includes: '2 hrs, 1 photographer, 35 edits' },
      { tier: 'Business', price: '₹9,000', includes: '3 hrs, 1 photographer + assistant, 60 edits' },
      { tier: 'Premiere', price: '₹16,000', includes: '4 hrs, 2 photographers, 100 edits + reel' }
    ]
  }
]

export const getShoot = (id) => SHOOTS.find((s) => s.id === id)
