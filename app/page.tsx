'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import { parks } from '@/data/parks'
import { ChevronRight, MapPin } from 'lucide-react'

export default function Home() {
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block animate-fadeInUp">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium">
              ✨ Descubre la Magia de Orlando
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Tu Guía Completa de los Parques Temáticos
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Explora Disney World y Universal Orlando con información detallada sobre atracciones, guías de recorrido y todo lo que necesitas para vivir la experiencia perfecta.
          </p>

          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <SearchBar onSearch={(results) => {
              setSearchResults(results)
              setShowResults(true)
            }} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Link
              href="#disney"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              Explorar Disney <ChevronRight size={20} />
            </Link>
            <Link
              href="#universal"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              Explorar Universal <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Resultados de Búsqueda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{result.name}</h3>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong className="text-gray-900">Tipo:</strong> {result.type}</p>
                    <p><strong className="text-gray-900">Parque:</strong> {result.park}</p>
                    <p><strong className="text-gray-900">Duración:</strong> {result.duration}</p>
                    <p><strong className="text-gray-900">Tiempo de espera:</strong> ~{result.waitTime} min</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disney Section */}
      <section id="disney" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏰 Disney World</h2>
            <p className="text-lg text-gray-600 mb-6">
              Descubre la magia de Disney con sus cuatro parques temáticos únicos: Magic Kingdom, EPCOT, Hollywood Studios y Animal Kingdom. Cada parque ofrece experiencias inolvidables.
            </p>
          </div>

          {/* Disney Parks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parks.filter(p => p.company === 'Disney').map((park) => (
              <Link
                key={park.id}
                href={`/park/${park.id}`}
                className="group bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="bg-blue-100 h-40 flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-200 transition-colors">
                  {park.name}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{park.name}</h3>
                  <p className="text-gray-600 mb-4">{park.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{park.attractions.length} atracciones</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Section */}
      <section id="universal" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎬 Universal Orlando</h2>
            <p className="text-lg text-gray-600 mb-6">
              Vive la emoción de Universal Orlando con sus parques temáticos basados en películas famosas. Desde Harry Potter hasta Jurassic World, cada rincón es una aventura.
            </p>
          </div>

          {/* Universal Parks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parks.filter(p => p.company === 'Universal').map((park) => (
              <Link
                key={park.id}
                href={`/park/${park.id}`}
                className="group bg-white border-2 border-gray-300 rounded-lg overflow-hidden hover:border-red-600 hover:shadow-lg transition-all"
              >
                <div className="bg-red-100 h-40 flex items-center justify-center text-red-600 font-bold text-lg group-hover:bg-red-200 transition-colors">
                  {park.name}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{park.name}</h3>
                  <p className="text-gray-600 mb-4">{park.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{park.attractions.length} atracciones</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Guía Mágica</h3>
              <p className="text-gray-400">Tu compañero perfecto para explorar los parques temáticos de Orlando.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#disney" className="hover:text-white transition-colors">Disney World</Link></li>
                <li><Link href="#universal" className="hover:text-white transition-colors">Universal Orlando</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Información</h3>
              <p className="text-gray-400 text-sm">Todos los derechos reservados © 2024</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>Hecho con ❤️ para los amantes de los parques temáticos</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
