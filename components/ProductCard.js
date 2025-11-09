export default function ProductCard({product}){
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm card-shadow">
      <div className="p-6">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.brand} · {product.condition}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">{product.price}</div>
          <a href="/contact" className="text-[var(--accent)] text-sm">Me contacter</a>
        </div>
      </div>
    </article>
  )
}
