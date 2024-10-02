import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SelectedCardProvider } from '@/usecontext/Usecontext'
export default function App({ Component, pageProps }) {
  return (
    <SelectedCardProvider>
      <Component {...pageProps} />
    </SelectedCardProvider>
  )
}
