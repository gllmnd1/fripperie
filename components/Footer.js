export default function Footer(){
  return (
    <footer className="mt-24 bg-white border-t">
      <div className="container py-8 text-sm text-gray-600 flex items-center justify-between">
  <div>© {new Date().getFullYear()} La Fripperie Mame Diarra Tous droits réservés</div>
  <div>Made with care · <span className="text-[var(--accent)]">Vintage vibes</span></div>
      </div>
    </footer>
  )
}
