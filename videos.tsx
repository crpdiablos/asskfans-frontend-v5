import { videoLinks } from '../config/site'
export default function Videos() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <ul className="grid gap-3">
        {videoLinks.map(l => <li key={l.href}><a className="card block" href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>)}
      </ul>
      <p className="text-neutral-500 mt-4 text-sm">Edit links in <code>src/config/site.ts</code>.</p>
    </main>
  )
}
