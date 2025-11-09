export default function Hero(){
  return (
    <section className="bg-white">
      <div className="container py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold leading-tight">La Fripperie de Mame Diarra</h1>
          <p className="mt-4 text-gray-600">Pièces uniques, sélectionnées avec soin. Mode circulaire et esthétisme intemporel.</p>
          <div className="mt-6 flex gap-4">
            <a href="/collections" className="inline-block bg-[var(--accent)] text-white py-2 px-5 rounded-md shadow">Voir la collection</a>
            <a href="/about" className="inline-block border border-gray-200 py-2 px-5 rounded-md">À propos</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://i.pinimg.com/1200x/74/d0/b6/74d0b669875c67b1d74f7b5bdebe9afa.jpg" alt="vintage" className="w-72 h-72 object-contain" />
        </div>
      </div>
    </section>
  )
}
