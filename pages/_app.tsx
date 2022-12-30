import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SidebarProvider from '../libs/hooks/Sidebar/SidebarProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  )
}
