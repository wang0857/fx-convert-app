import { Share_Tech_Mono } from 'next/font/google'
import './scss/globals.scss'
import StoreProvider from './StoreProvider'

// @Hack: Define the font weight in the font object if it is limited.
const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Foreign Exchange Convert',
  description: 'Foreign Exchange Convert',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shareTechMono.className + ' min-h-screen'}>
        {/* Wrap with the <StoreProvider>, a Redux Provider we created, to use Redux */}
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
