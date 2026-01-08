export interface Attraction {
  id: string
  name: string
  park: string
  type: string
  description: string
  duration: string
  waitTime: number
  minHeight?: string
  movies?: string[]
  image?: string
}

export interface Park {
  id: string
  name: string
  company: string
  description: string
  image: string
  color: string
  attractions: Attraction[]
  itinerary: string[]
}

export const parks: Park[] = [
  {
    id: 'magic-kingdom',
    name: 'Magic Kingdom',
    company: 'Disney',
    description: 'El parque temático más icónico de Disney, hogar del Castillo de Cenicienta y atracciones clásicas.',
    image: '/images/magic-kingdom.jpg',
    color: 'bg-blue-600',
    attractions: [
      {
        id: 'space-mountain',
        name: 'Space Mountain',
        park: 'Magic Kingdom',
        type: 'Montaña Rusa',
        description: 'Una emocionante montaña rusa espacial en la oscuridad',
        duration: '3 minutos',
        waitTime: 45,
        minHeight: '44 pulgadas',
        movies: ['Viajes Espaciales'],
        image: '/images/attractions/space-mountain.jpg'
      },
      {
        id: 'cinderella-castle',
        name: 'Castillo de Cenicienta',
        park: 'Magic Kingdom',
        type: 'Atracción',
        description: 'El icónico castillo de Disney con vistas panorámicas del parque',
        duration: '10 minutos',
        waitTime: 20,
        movies: ['Cenicienta'],
        image: '/images/attractions/cinderella-castle.jpg'
      },
      {
        id: 'haunted-mansion',
        name: 'Haunted Mansion',
        park: 'Magic Kingdom',
        type: 'Atracción de Fantasía',
        description: 'Una mansión embrujada llena de fantasmas y efectos especiales',
        duration: '8 minutos',
        waitTime: 35,
        movies: ['Historias de Fantasmas'],
        image: '/images/attractions/haunted-mansion.jpg'
      },
      {
        id: 'pirates-caribbean',
        name: 'Piratas del Caribe',
        park: 'Magic Kingdom',
        type: 'Atracción Acuática',
        description: 'Navega por las aventuras de piratas en el Caribe',
        duration: '9 minutos',
        waitTime: 40,
        movies: ['Piratas del Caribe'],
        image: '/images/attractions/pirates-caribbean.jpg'
      },
    ],
    itinerary: [
      '9:00 AM - Llega temprano y dirígete a Space Mountain',
      '10:00 AM - Visita el Castillo de Cenicienta',
      '11:00 AM - Disfruta de Piratas del Caribe',
      '12:00 PM - Almuerzo en Pecos Bill',
      '1:00 PM - Descansa en el parque',
      '2:00 PM - Visita Haunted Mansion',
      '3:00 PM - Compra souvenirs',
      '4:00 PM - Disfruta del atardecer',
      '5:00 PM - Cena en el parque',
      '6:00 PM - Espectáculo nocturno',
    ]
  },
  {
    id: 'epcot',
    name: 'EPCOT',
    company: 'Disney',
    description: 'Explora el futuro y culturas del mundo en este parque único.',
    image: '/images/epcot.jpg',
    color: 'bg-purple-600',
    attractions: [
      {
        id: 'test-track',
        name: 'Test Track',
        park: 'EPCOT',
        type: 'Montaña Rusa',
        description: 'Prueba un vehículo de prueba de alta velocidad',
        duration: '5 minutos',
        waitTime: 50,
        minHeight: '40 pulgadas',
        movies: ['Innovación'],
      },
      {
        id: 'soarin',
        name: 'Soarin\' Around the World',
        park: 'EPCOT',
        type: 'Simulador',
        description: 'Vuela sobre los lugares más hermosos del mundo',
        duration: '5 minutos',
        waitTime: 30,
        movies: ['Viajes Aéreos'],
      },
    ],
    itinerary: [
      '9:00 AM - Comienza en Future World',
      '10:00 AM - Test Track',
      '11:00 AM - Soarin\' Around the World',
      '12:00 PM - Almuerzo en el Pabellón de Japón',
      '1:00 PM - Explora World Showcase',
      '3:00 PM - Descansa',
      '4:00 PM - Compra artesanías',
      '5:00 PM - Cena en Francia',
      '6:00 PM - Espectáculo de fuegos artificiales',
    ]
  },
  {
    id: 'universal-studios',
    name: 'Universal Studios',
    company: 'Universal',
    description: 'Vive la magia del cine con atracciones basadas en películas famosas.',
    image: '/images/universal-studios.jpg',
    color: 'bg-red-600',
    attractions: [
      {
        id: 'harry-potter',
        name: 'Harry Potter and the Forbidden Journey',
        park: 'Universal Studios',
        type: 'Montaña Rusa',
        description: 'Vuela en escoba por Hogwarts',
        duration: '3 minutos',
        waitTime: 90,
        minHeight: '48 pulgadas',
        movies: ['Harry Potter'],
      },
      {
        id: 'minion-ride',
        name: 'Minion Mayhem',
        park: 'Universal Studios',
        type: 'Simulador',
        description: 'Únete a los Minions en una aventura loca',
        duration: '4 minutos',
        waitTime: 35,
        movies: ['Mi Villano Favorito'],
      },
    ],
    itinerary: [
      '9:00 AM - Llega a Universal Studios',
      '9:30 AM - Harry Potter and the Forbidden Journey',
      '10:30 AM - Minion Mayhem',
      '11:30 AM - Almuerzo en The Three Broomsticks',
      '1:00 PM - Espectáculo en vivo',
      '2:00 PM - Compra en Diagon Alley',
      '3:00 PM - Descansa',
      '4:00 PM - Más atracciones',
      '5:00 PM - Cena',
      '6:00 PM - Espectáculo nocturno',
    ]
  },
  {
    id: 'islands-adventure',
    name: 'Islands of Adventure',
    company: 'Universal',
    description: 'Aventuras épicas en seis islas temáticas diferentes.',
    image: '/images/islands-adventure.jpg',
    color: 'bg-green-600',
    attractions: [
      {
        id: 'hulk-coaster',
        name: 'The Incredible Hulk Coaster',
        park: 'Islands of Adventure',
        type: 'Montaña Rusa',
        description: 'Una montaña rusa de lanzamiento extremo',
        duration: '2 minutos',
        waitTime: 60,
        minHeight: '54 pulgadas',
        movies: ['The Incredible Hulk'],
      },
      {
        id: 'spider-man',
        name: 'The Amazing Adventures of Spider-Man',
        park: 'Islands of Adventure',
        type: 'Atracción 3D',
        description: 'Lucha contra los villanos de Spider-Man',
        duration: '4 minutos',
        waitTime: 45,
        movies: ['Spider-Man'],
      },
    ],
    itinerary: [
      '9:00 AM - Comienza en Marvel Super Hero Island',
      '9:30 AM - The Incredible Hulk Coaster',
      '10:30 AM - The Amazing Adventures of Spider-Man',
      '11:30 AM - Almuerzo',
      '1:00 PM - Explora Toon Lagoon',
      '2:00 PM - Descansa',
      '3:00 PM - Skull Island',
      '4:00 PM - Jurassic Park',
      '5:00 PM - Cena',
      '6:00 PM - Espectáculo de cierre',
    ]
  },
]

export function searchParks(query: string): Attraction[] {
  const lowerQuery = query.toLowerCase()
  const results: Attraction[] = []
  
  parks.forEach(park => {
    park.attractions.forEach(attraction => {
      if (
        attraction.name.toLowerCase().includes(lowerQuery) ||
        attraction.description.toLowerCase().includes(lowerQuery) ||
        attraction.type.toLowerCase().includes(lowerQuery)
      ) {
        results.push(attraction)
      }
    })
  })
  
  return results
}
