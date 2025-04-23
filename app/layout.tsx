import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Chris Brickley | Elite Basketball Trainer',
  description: 'Official website of Chris Brickley, elite basketball trainer and skills coach.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>{children}</body>
    </html>
  )
}
