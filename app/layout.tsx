import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Rethink_Sans } from 'next/font/google'

const rethinkSans = Rethink_Sans({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ChronoStation',
  description: 'Sua loja de artigos retros',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}, ${rethinkSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
