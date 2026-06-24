import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import SampleClicks from './components/SampleClicks.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import MyOrders from './components/MyOrders.jsx'

function OnePager() {
  return (
    <>
      <Home />
      <SampleClicks />
      <About />
      <ContactUs />
    </>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<OnePager />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
