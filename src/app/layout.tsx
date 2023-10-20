import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flyingfeather It Solution',
  description: 'its a devlopment site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}</body>
        {/* <Footer/> */}
    </html>
  )
}
