import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">Pour plus d'informations ou pour réserver une visite, écrivez-nous.</p>

        <div className="mt-6 bg-white p-6 rounded-lg card-shadow max-w-xl">
          {/* Replace the action URL with your Formspree endpoint (https://formspree.io/f/your-id) */}
          <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input name="name" required className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" required className="mt-1 w-full border rounded px-3 py-2" rows="4" />
            </div>
            <div>
              <button className="bg-[var(--accent)] text-white py-2 px-4 rounded">Envoyer</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
