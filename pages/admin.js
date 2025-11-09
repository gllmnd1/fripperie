import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageUploader from '../components/ImageUploader'

export default function AdminPage(){
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    ;(async ()=>{
      try{
        const res = await fetch('/api/admin/status')
        const j = await res.json()
        if(mounted) setAdmin(!!j.admin)
      }catch(e){}
      if(mounted) setLoading(false)
    })()
    return ()=>{ mounted = false }
  }, [])

  async function handleLogin(e){
    e.preventDefault()
    const form = e.target
    const pwd = form.password.value
    try{
      const r = await fetch('/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ password: pwd }) })
      if(r.ok){ setAdmin(true) }
      else alert('Mot de passe invalide')
    }catch(e){ alert('Erreur') }
  }

  async function handleLogout(){
    await fetch('/api/admin/logout')
    setAdmin(false)
  }

  return (
    <div>
      <Header />
      <main className="container py-16">
        <h1 className="text-3xl font-bold">Espace administrateur</h1>
        <p className="mt-2 text-gray-600">Gérez les images et le contenu de la vitrine.</p>

        <div className="mt-8">
          {loading ? <div>Chargement…</div> : (
            admin ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Dashboard</h2>
                  <button onClick={handleLogout} className="text-sm text-[var(--accent)]">Se déconnecter</button>
                </div>
                <ImageUploader onChange={()=>{ /* uploader returns uploaded URLs for immediate preview */ }} />
                <div className="text-sm text-gray-500">Les images uploadées sont stockées sur Cloudinary. Pour qu'elles apparaissent publiquement dans la vitrine, ajoutez-les dans `public/images/` ou remplacez les chemins dans le code (site statique).</div>
              </div>
            ) : (
              <div className="max-w-md bg-white p-6 rounded-lg card-shadow">
                <h3 className="font-semibold">Connexion admin</h3>
                <form onSubmit={handleLogin} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm">Mot de passe</label>
                    <input name="password" type="password" className="mt-1 w-full border rounded px-3 py-2" required />
                  </div>
                  <div>
                    <button type="submit" className="bg-[var(--accent)] text-white py-2 px-4 rounded">Se connecter</button>
                  </div>
                </form>
              </div>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
