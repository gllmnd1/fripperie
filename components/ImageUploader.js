import { useState } from 'react'

export default function ImageUploader({ onChange }){
  const [names, setNames] = useState([])
  const [uploading, setUploading] = useState(false)
  const [urls, setUrls] = useState([])

  async function handleFiles(e){
    const files = Array.from(e.target.files || [])
    setNames(files.map(f=>f.name))

    setUploading(true)
    try{
      const uploaded = []
      for(const f of files){
        const dataUrl = await new Promise((res, rej)=>{
          const reader = new FileReader()
          reader.onload = () => res(reader.result)
          reader.onerror = rej
          reader.readAsDataURL(f)
        })

        const resp = await fetch('/api/upload', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ dataUrl }) })
        const json = await resp.json()
        if(resp.ok && json.url) uploaded.push(json.url)
        else console.error('upload failed', json)
      }

  setUrls(uploaded)
      onChange?.(uploaded)
    }catch(err){
      console.error(err)
      alert('Erreur lors de l\'upload')
    }finally{ setUploading(false) }
  }

  function clearAll(){
    setNames([])
    setUrls([])
    onChange?.([])
  }

  return (
    <div className="bg-white p-6 rounded-lg card-shadow">
      <h4 className="font-medium mb-2">Uploader des photos (admin)</h4>
      <p className="text-sm text-gray-500">Les images seront uploadées sur Cloudinary et leurs URLs sauvegardées pour la prévisualisation publique.</p>

      <div className="mt-4 flex items-center gap-3">
        <label className={`inline-flex items-center gap-2 cursor-pointer rounded-md px-4 py-2 bg-gradient-to-br from-white to-gray-50 border hover:shadow-md ${uploading? 'opacity-60':''}`}>
          <input type="file" accept="image/*" multiple onChange={handleFiles} className="hidden" disabled={uploading} />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-6a4 4 0 00-4-4H7a4 4 0 00-4 4v6z" /></svg>
          <span className="text-sm font-medium">{uploading ? 'Uploading...' : 'Sélectionner des photos'}</span>
        </label>

        <button onClick={clearAll} className="text-sm text-[var(--accent)]">Effacer</button>
      </div>

      {urls.length>0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {urls.map((u,i)=>(<img key={i} src={u} alt={`img-${i}`} className="w-full h-28 object-cover rounded" />))}
        </div>
      )}

      {names.length>0 && (
        <div className="mt-3 text-sm text-gray-600">
          <div>Fichiers sélectionnés :</div>
          <ul className="list-disc pl-5">
            {names.map((n,i)=>(<li key={i}>{n}</li>))}
          </ul>
        </div>
      )}
    </div>
  )
}
