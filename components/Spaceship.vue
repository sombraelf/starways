<template>
    <section class="spaceship-section bg-gray-100 py-16">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <!-- Bild des Raumschiffs -->
          <div class="spaceship-image">
            <img src="#" alt="Raumschiff" class="w-full h-auto rounded-lg shadow-md">
          </div>
          <!-- Textuelle Beschreibung des Raumschiffs -->
          <div class="spaceship-description">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Unser Raumschiff</h2>
            <p class="text-lg mb-4">Erforsche das Universum mit unserem modernen und leistungsstarken Raumschiff. Ausgestattet mit den neuesten Technologien und einem erfahrenen Team von Astronauten an Bord ist jede Reise mit "starways" ein unvergessliches Abenteuer.</p>
            <nuxt-link to="/raumschiff" class="bg-accent hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full inline-block">Mehr erfahren</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    // Hier könntest du die Props, Data, Methods usw. definieren, die du benötigst
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für die Raumschiff-Sektion hinzufügen */
  .spaceship-section {
    /* Hintergrundfarbe und Abstand */
  }
  .spaceship-image img {
    /* Bild-Styling */
  }
  .bg-gray-100 {
    background-color: #f9f4f8; /* Hintergrundfarbe */
  }
  .text-gray-700 {
    color: #19232e; /* Textfarbe */
  }
  .bg-accent {
    background-color: #b258a9; /* Akzentfarbe für den Button */
  }
  </style>
  