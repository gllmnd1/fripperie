export default function Hero(){
  return (
    <section className="relative bg-white">
      {/* Full-bleed hero style Zara */}
      <div className="relative overflow-hidden" style={{height: '85vh', minHeight: '600px'}}>
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/1f/1b/f4/1f1bf4beeeab98312d7656495f2afc84.jpg"
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-lg text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
              La Fripperie
            </h1>
            <p className="text-base md:text-lg font-light tracking-wide mb-8">
              Sélection unique de vêtements choisie par Mame Diarra
            </p>

            <div className="flex flex-wrap gap-3">
              <a 
                href="/collections" 
                className="inline-block bg-white text-black py-3 px-8 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-300"
              >
                Voir la collection
              </a>
              <a 
                href="/about" 
                className="inline-block bg-transparent border border-white text-white py-3 px-8 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                À propos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}