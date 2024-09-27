import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skibidi Language Translator',
  description: 'Translate normal language into Skibidi language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Skibidi Translator</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-200 text-center p-4 mt-8">
          <p>&copy; 2024 Skibidi Translator. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
