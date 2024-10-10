import type { Metadata } from 'next'
import './globals.css'
import { Rethink_Sans } from 'next/font/google'

const retinkSans = Rethink_Sans({
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
      <body className={`${retinkSans.className} antialiased`}>{children}</body>
    </html>
  )
}
