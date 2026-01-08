import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guía Mágica de Orlando',
  description: 'Tu guía completa de los parques de Disney y Universal en Orlando',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
