import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import Topbar from '@/components/Topbar'
import Bottombar from '@/components/Bottombar'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  fallback: [
    'helvetica', 'sans-serif'
  ],
})

export const metadata: Metadata = {
  title: 'Welcome | Juno\'s blog',
  description: 'Juno\'s blog',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Topbar />
        <main>
          {children}
        </main>
        <Bottombar />
      </body>
    </html>
  )
}

export default RootLayout;