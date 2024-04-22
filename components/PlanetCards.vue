<template>
    <section class="planets-section bg-gray-100 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Unsere Reiseziele</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Planetenkarten -->
          <div v-for="(planet, index) in planets" :key="index" class="planet-card bg-white p-6 rounded-lg shadow-md">
            <img :src="planet.image" :alt="planet.name" class="w-full h-48 object-cover mb-4 rounded-lg">
            <h3 class="text-xl font-bold mb-2">{{ planet.name }}</h3>
            <p class="text-gray-700 mb-4">{{ planet.description }}</p>
            <nuxt-link :to="'/planet/' + planet.slug" class="bg-accent hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full inline-block">Mehr erfahren</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        planets: [
          {
            name: 'Mars',
            image: '/mars.jpg',
            description: 'Der Mars ist der vierte Planet im Sonnensystem und der äußere Nachbar der Erde.',
            slug: 'mars'
          },
          {
            name: 'Venus',
            image: '/venus.jpg',
            description: 'Die Venus ist der zweitgrößte Planet im Sonnensystem und der heißeste Planet.',
            slug: 'venus'
          },
          {
            name: 'Jupiter',
            image: '/jupiter.jpg',
            description: 'Jupiter ist der größte Planet im Sonnensystem und ein Gasriese.',
            slug: 'jupiter'
          },
          {
            name: 'Saturn',
            image: '/saturn.jpg',
            description: 'Saturn ist bekannt für seine markanten Ringe und ist ein Gasriese wie Jupiter.',
            slug: 'saturn'
          },
          // Füge hier weitere Planeten hinzu
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für die Planetenkarten hinzufügen */
  .planets-section {
    /* Hintergrundfarbe und Abstand */
  }
  .planet-card {
    /* Karten-Styling */
  }
  .bg-gray-100 {
    background-color: #f9f4f8; /* Hintergrundfarbe */
  }
  .text-gray-700 {
    color: #19232e; /* Textfarbe */
  }
  </style>
  