import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const sampleProducts = [
  { id:1, title:'Robe années 70', brand:'Vintage Co.', condition:'Très bon état', price:'3000FCA', image:'https://i.pinimg.com/736x/cc/9a/95/cc9a955446532bdac7d32f812ba52df8.jpg'},
  { id:2, title:'Manteau en laine', brand:'La Maison', condition:'Bon état', price:'3500 FCA', image:'https://i.pinimg.com/1200x/38/cd/56/38cd56611388176bccdcbe486b9e1719.jpg'},
  { id:3, title:'Chemise brodée', brand:'Atelier', condition:'Très bon état', price:'4000 FCA', image:'https://i.pinimg.com/1200x/a0/e9/2f/a0e92f3e9993ced9ba6c142f9682d3fa.jpg'},
  { id:4, title:'Sac rétro', brand:'Second Life', condition:'Bon état', price:'3000 FCA', image:'https://i.pinimg.com/1200x/e6/48/ff/e648ff8e255361c7964f34dbce2a77a4.jpg'},
]

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />

        {/* Vitrine moderne */}
        <section className="container mt-16 mb-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Vitrine</h2>
              <p className="text-gray-500 mt-2 text-sm">Sélectionnée par Mame Diarra</p>
            </div>
            <a href="/collections" className="text-sm text-[var(--accent)]">Voir tout</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleProducts.slice(0,3).map(p => (
              <div key={p.id} className="group cursor-pointer rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute left-4 bottom-4 text-white">
                    <div className="text-sm font-medium">{p.title}</div>
                    <div className="text-xs opacity-80">{p.brand} · {p.condition}</div>
                  </div>

                  <div className="absolute right-4 top-4 bg-white/90 text-black text-xs px-3 py-1 rounded">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mt-16 mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Sélections récentes</h2>
            <p className="text-gray-500 mt-2 text-sm">Pièces mises en avant cette saison</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.map(p => (
              <div key={p.id} className="group cursor-pointer rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-1 mt-2">
                  <div className="font-medium text-sm mb-1">{p.title}</div>
                  <div className="text-xs text-gray-500 mb-2">{p.brand} · {p.condition}</div>
                  <div className="text-base font-semibold">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}