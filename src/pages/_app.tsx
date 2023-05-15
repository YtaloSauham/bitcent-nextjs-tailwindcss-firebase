import { AuthenticationProvider } from '@/data/contexts/AuthenticationContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider>

      <Component {...pageProps} />

    </AuthenticationProvider>
  )
}
