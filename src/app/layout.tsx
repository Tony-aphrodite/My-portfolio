import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steve Chen | Full-Stack Developer',
  description: 'Portfolio of Steve Chen - Web, App & Full-Stack Developer',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'app development'],
  authors: [{ name: 'Steve Chen' }],
  openGraph: {
    title: 'Steve Chen | Full-Stack Developer',
    description: 'Portfolio of Steve Chen - Web, App & Full-Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}