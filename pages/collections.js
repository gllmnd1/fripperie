import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import ProductCard from '../components/ProductCard'

const sampleItems = [
  { id:1, title:'Robe années 70', brand:'Vintage Co.', condition:'Très bon état', price:'3500 FCA', image:'https://i.pinimg.com/736x/cc/9a/95/cc9a955446532bdac7d32f812ba52df8.jpg'},
  { id:2, title:'Manteau en laine', brand:'La Maison', condition:'Bon état', price:'3000 FCA', image:'https://i.pinimg.com/736x/3b/82/8b/3b828b539195dfbb7afcffe137c5f149.jpg'},
  { id:3, title:'Chemise brodée', brand:'Atelier', condition:'Très bon état', price:'4000 FCA', image:'https://i.pinimg.com/1200x/a0/e9/2f/a0e92f3e9993ced9ba6c142f9682d3fa.jpg'},
]

export default function Collections(){
  const items = sampleItems

  return (
    <div>
      <Header />
      <main className="container py-16">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold">Collections</h1>
        <p className="mt-2 text-gray-600">Parcourez notre sélection triée sur le volet.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => <ProductCard key={i.id} product={i} />)}
        </div>

      </main>
      <Footer />
    </div>
  )
}
