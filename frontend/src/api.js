const API_BASE = const API_BASE = 'https://gugan-s-visual.onrender.com/api'

// A simple persistent client id so "My Orders" can show this visitor's
// orders without requiring a login system.
export function getClientId() {
  let id = localStorage.getItem('shutterline_client_id')
  if (!id) {
    id = 'client_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('shutterline_client_id', id)
  }
  return id
}

function localOrders() {
  return JSON.parse(localStorage.getItem('shutterline_orders') || '[]')
}

function saveLocalOrder(order) {
  const all = localOrders()
  all.unshift(order)
  localStorage.setItem('shutterline_orders', JSON.stringify(all))
}

export async function createOrder(payload) {
  const body = { ...payload, clientId: getClientId() }
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    if (!res.ok) throw new Error('Server responded with an error')
    const data = await res.json()
    saveLocalOrder(data)
    return { ok: true, order: data, offline: false }
  } catch (err) {
    // Backend not reachable (e.g. running the frontend alone). Keep the
    // order locally so the My Orders page still works for a demo/preview.
    const fallback = {
      ...body,
      _id: 'local_' + Date.now(),
      status: 'Pending confirmation',
      createdAt: new Date().toISOString()
    }
    saveLocalOrder(fallback)
    return { ok: true, order: fallback, offline: true }
  }
}

export async function fetchOrders() {
  const clientId = getClientId()
  try {
    const res = await fetch(`${API_BASE}/orders/${clientId}`)
    if (!res.ok) throw new Error('Server responded with an error')
    return await res.json()
  } catch (err) {
    return localOrders()
  }
}
