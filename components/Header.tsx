'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              🎪
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline group-hover:text-blue-600 transition-colors">
              Guía Mágica
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/#disney" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Disney
            </Link>
            <Link href="/#universal" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Universal
            </Link>
            <Link href="/#guides" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Guías
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-fadeInUp">
            <Link
              href="/#disney"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Disney
            </Link>
            <Link
              href="/#universal"
              className="block px-4 py-2 text-gray-700 hover:bg-red-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Universal
            </Link>
            <Link
              href="/#guides"
              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Guías
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
