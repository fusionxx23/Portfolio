import { Html, Head, Main, NextScript } from 'next/document'
import SidebarProvider from '../libs/hooks/Sidebar/SidebarProvider'


export default function document() {
  return (
    <Html>
      <Head />
        <body className='hide overflow-y-hidden'>
          <Main />
          <NextScript />
        </body>   
    </Html>
  )

}
