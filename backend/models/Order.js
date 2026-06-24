import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    clientId: { type: String, required: true, index: true },
    shootId: { type: String, required: true },
    shootTitle: { type: String, required: true },
    tier: { type: String, required: true },
    price: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    date: { type: String, required: true },
    location: { type: String },
    notes: { type: String },
    status: { type: String, default: 'Pending confirmation' }
  },
  { timestamps: true }
)

export default mongoose.model('Order', orderSchema)
