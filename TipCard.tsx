import { useState } from 'react'
import { createCheckoutSession, createPayPalOrder, pingHealth } from '../lib/api'
import Toast from './Toast'

export default function TipCard() {
  const [amount, setAmount] = useState<number>(500) // cents
  const [custom, setCustom] = useState<string>('')
  const [loading, setLoading] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)

  function applyCustom() {
    const dollars = parseFloat(custom)
    if (Number.isFinite(dollars) && dollars > 0) {
      setAmount(Math.round(dollars * 100))
    } else {
      setToast('Enter a valid amount like 7.50')
    }
  }

  async function stripe() {
    try {
      setLoading('stripe')
      const data = await createCheckoutSession({
        amount, currency: 'usd',
        success_url: 'https://asskfans.com/tip/success',
        cancel_url: 'https://asskfans.com/tip/cancel',
      })
      if (data.url) window.location.href = data.url
      else setToast('No Stripe checkout URL returned')
    } catch (e:any) {
      setToast(e.message || 'Stripe error')
    } finally {
      setLoading(null)
    }
  }

  async function paypal() {
    try {
      setLoading('paypal')
      const data = await createPayPalOrder({
        amount, // cents; backend should convert to dollars
        return_url: 'https://asskfans.com/tip/success',
        cancel_url: 'https://asskfans.com/tip/cancel',
      })
      if (data.approveUrl) window.location.href = data.approveUrl
      else setToast('No PayPal approve URL returned')
    } catch (e:any) {
      setToast(e.message || 'PayPal error')
    } finally {
      setLoading(null)
    }
  }

  async function health() {
    const r = await pingHealth()
    setToast(`Health ${r.status}: ${r.text}`)
  }

  return (
    <section id="tip" className="container py-8">
      <div className="card max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-2">Tip the Ass King</h3>
        <p className="text-neutral-400 mb-4">Choose an amount and launch secure checkout.</p>

        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm text-neutral-300">Amount</label>
          <select
            className="bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          >
            <option value={500}>$5</option>
            <option value={1000}>$10</option>
            <option value={2000}>$20</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input placeholder="Custom (e.g. 7.50)" value={custom} onChange={e=>setCustom(e.target.value)} />
          <button className="btn" onClick={applyCustom}>Set</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onClick={stripe} disabled={!!loading} className="btn">{loading==='stripe'?'Starting…':'Pay with Stripe'}</button>
          <button onClick={paypal} disabled={!!loading} className="btn">{loading==='paypal'?'Starting…':'Pay with PayPal'}</button>
        </div>

        <button onClick={health} className="underline text-sm mt-3">Check backend health</button>
      </div>
      <Toast message={toast} />
    </section>
  )
}
