import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'

export default function About(){
  return (
    <div>
      <Header />
      <main className="container py-16">
        <div className="mb-6">
          <BackButton />
        </div>
        <h1 className="text-3xl font-bold">À propos</h1>
        <p className="mt-4 text-gray-600">La Fripperie. Notre démarche : qualité, transparence et style durable.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="font-semibold">Notre mission</h3>
            <p className="text-gray-600 mt-2">Réduire le gaspillage textile en donnant une seconde vie aux vêtements.</p>
          </div>
          <div className="bg-white p-6 rounded-lg card-shadow">
            <h3 className="font-semibold">Visitez nous</h3>
            <p className="text-gray-600 mt-2">Boutique sur rendez-vous et ventes en ligne.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
