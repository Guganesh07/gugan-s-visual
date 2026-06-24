import express from 'express'
import Order from '../models/Order.js'

const router = express.Router()

// Create a new order (called when a client books a shoot from Home)
router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body)
    res.status(201).json(order)
  } catch (err) {
    res.status(400).json({ message: 'Could not create order', error: err.message })
  }
})

// Get all orders for one client (used by My Orders page)
router.get('/:clientId', async (req, res) => {
  try {
    const orders = await Order.find({ clientId: req.params.clientId }).sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch orders', error: err.message })
  }
})

export default router
