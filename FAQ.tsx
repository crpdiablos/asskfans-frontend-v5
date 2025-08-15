const faqs = [
  { q: 'Is this secure?', a: 'Yes—Stripe and PayPal handle your payment details.' },
  { q: 'Can I choose any amount?', a: 'Yes—use the custom field or presets.' },
  { q: 'Refunds?', a: 'Email owner@asskfans.com for billing issues.' },
]
export default function FAQ() {
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="grid gap-3">
        {faqs.map(item => (
          <details key={item.q} className="card">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="text-neutral-400 mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
