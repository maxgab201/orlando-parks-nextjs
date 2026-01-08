import { parks } from '@/data/parks'
import Header from '@/components/Header'
import { ChevronLeft, Clock, Users, MapPin } from 'lucide-react'
import Link from 'next/link'

export function generateStaticParams() {
  return parks.map((park) => ({
    id: park.id,
  }))
}

export default function ParkPage({ params }: { params: { id: string } }) {
  const park = parks.find(p => p.id === params.id)

  if (!park) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Parque no encontrado</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const isDisney = park.company === 'Disney'
  const headerColor = isDisney ? 'bg-blue-600' : 'bg-red-600'

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className={`${headerColor} text-white py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity w-fit">
            <ChevronLeft size={20} />
            <span>Volver</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{park.name}</h1>
          <p className="text-lg opacity-90">{park.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Atracciones */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Atracciones</h2>
            <div className="space-y-6">
              {park.attractions.map((attraction) => (
                <div key={attraction.id} className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 mb-4">{attraction.description}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Duración</p>
                        <p className="font-semibold text-gray-900">{attraction.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-blue-600" />
                      <div>
                        <p className="text-xs text-gray-600">Espera</p>
                        <p className="font-semibold text-gray-900">~{attraction.waitTime} min</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Tipo</p>
                      <p className="font-semibold text-gray-900 capitalize">{attraction.type}</p>
                    </div>
                    {attraction.minHeight && (
                      <div>
                        <p className="text-xs text-gray-600">Altura Mín.</p>
                        <p className="font-semibold text-gray-900">{attraction.minHeight}</p>
                      </div>
                    )}
                  </div>

                  {attraction.movies && attraction.movies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Películas relacionadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {attraction.movies.map((movie, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {movie}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Itinerario */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Itinerario Sugerido</h3>
              <div className="space-y-3">
                {park.itinerary.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`${headerColor} text-white py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu aventura?</h2>
          <p className="text-lg mb-8 opacity-90">Descubre más parques y planifica tu viaje perfecto a Orlando</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explorar Más Parques
          </Link>
        </div>
      </section>
    </div>
  )
}
