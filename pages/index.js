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

        {/* Galerie attractive sur la home */}
        <section className="container mt-16 mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Vitrine</h2>
              <p className="text-gray-500 mt-2 text-sm">Sélectionnée par Mame Diarra</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleProducts.slice(0,3).map(p => (
              <div key={p.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-sm overflow-hidden mb-3 aspect-[3/4] relative">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="px-1">
                  <div className="font-medium text-sm mb-1">{p.title}</div>
                  <div className="text-xs text-gray-500 mb-2">{p.brand} · {p.condition}</div>
                  <div className="text-base font-semibold">{p.price}</div>
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleProducts.map(p => (
              <div key={p.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-sm overflow-hidden mb-3 aspect-[3/4] relative">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="px-1">
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