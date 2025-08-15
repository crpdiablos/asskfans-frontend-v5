type CardProps = { name: string; tagline: string }
function Card({ name, tagline }: CardProps) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-neutral-400 text-sm">{tagline}</p>
    </div>
  )
}
export default function CreatorGrid() {
  const creators = [
    { name: 'Ass King', tagline: 'Chief Cheeks Officer' },
    { name: 'Guest No. 1', tagline: 'Special appearance' },
    { name: 'Guest No. 2', tagline: 'Shakes it like a pro' },
  ]
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-4">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {creators.map(c => <Card key={c.name} {...c} />)}
      </div>
    </section>
  )
}
