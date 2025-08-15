import { brand } from '../config/site'
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container py-6 text-sm text-neutral-400 flex items-center justify-between">
        <span>© {brand.name}</span>
        <span>Powered by Stripe & PayPal</span>
      </div>
    </footer>
  )
}
