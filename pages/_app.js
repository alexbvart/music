import AppLayout from '../components/AppLayout'
import ColorState from '../context/Color/ColorState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ColorState>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ColorState>
  )
}

export default MyApp
