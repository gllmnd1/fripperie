import '../styles/globals.css'
import Seo from '../components/Seo'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  )
}
