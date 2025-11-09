import Link from 'next/link'

export default function BackButton({ href, children }){
  const content = (
    <button
      type="button"
      aria-label="Retour"
      className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded text-sm tracking-wider text-gray-700 bg-white hover:bg-gray-50 transition"
      onClick={(e)=>{
        if(!href){
          if(typeof window !== 'undefined') window.history.back()
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="uppercase text-xs font-medium">{children || 'Retour'}</span>
    </button>
  )

  if(href){
    return (
      <Link href={href} legacyBehavior>
        <a aria-label="Retour" className="no-underline">{content}</a>
      </Link>
    )
  }

  return content
}
