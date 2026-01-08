'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { searchParks } from '@/data/parks'
import type { Attraction } from '@/data/parks'

interface SearchBarProps {
  onSearch?: (results: Attraction[]) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Attraction[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      const searchResults = searchParks(value)
      setResults(searchResults)
      setIsOpen(true)
      onSearch?.(searchResults)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Busca parques, atracciones..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
          {results.map((attraction) => (
            <div
              key={attraction.id}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors"
              onClick={() => {
                setQuery('')
                setIsOpen(false)
              }}
            >
              <h3 className="font-semibold text-gray-900">{attraction.name}</h3>
              <p className="text-sm text-gray-600">{attraction.type} • {attraction.park}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
