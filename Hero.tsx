import Link from 'next/link'
import { brand } from '../config/site'
export default function Hero() {
  return (
    <section className="container text-center py-16">
      <div className="badge inline-block mb-4">Official Tip Jar</div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{brand.name}</h1>
      <p className="text-neutral-400 max-w-2xl mx-auto">{brand.tagline}</p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link className="btn" href="#tip">Tip Now</Link>
        <Link className="btn" href="/cams">Cams</Link>
        <Link className="btn" href="/videos">Videos</Link>
      </div>
    </section>
  )
}
