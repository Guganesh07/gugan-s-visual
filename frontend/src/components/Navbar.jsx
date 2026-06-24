import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'sample-clicks', label: 'Sample Clicks' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact Us' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Close the mobile drawer whenever the route changes
  useEffect(() => setOpen(false), [location.pathname])

  // If we land on "/" with a #section hash (coming from another page),
  // scroll to that section once the one-pager has mounted.
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  const goToSection = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__row">
        <a href="/#home" className="navbar__brand" onClick={goToSection('home')}>
          <img src="/logo.png" alt="studio logo" className="navbar__logo" />
          <span className="navbar__name">
            Gugan's visual <em>Photography</em>
          </span>
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((link) => (
            <a key={link.id} href={`/#${link.id}`} className="navbar__link" onClick={goToSection(link.id)}>
              {link.label}
            </a>
          ))}
          <NavLink
            to="/my-orders"
            className={({ isActive }) => 'navbar__orders' + (isActive ? ' navbar__orders--active' : '')}
          >
            My Orders
          </NavLink>
        </nav>
      </div>

      <nav className={'navbar__links navbar__links--mobile' + (open ? ' navbar__links--open' : '')}>
        {LINKS.map((link) => (
          <a key={link.id} href={`/#${link.id}`} className="navbar__link" onClick={goToSection(link.id)}>
            {link.label}
          </a>
        ))}
        <NavLink
          to="/my-orders"
          className={({ isActive }) => 'navbar__orders' + (isActive ? ' navbar__orders--active' : '')}
        >
          My Orders
        </NavLink>
      </nav>
    </header>
  )
}
