<template>
    <div class="hero-banner bg-hero bg-cover bg-center">
      <div class="container mx-auto py-16 text-center">
        <h1 class="text-4xl md:text-6xl text-white font-bold mb-4">Willkommen bei Starways</h1>
        <p class="text-lg md:text-xl text-white mb-8">Entdecke die unendlichen Weiten des Universums</p>
        <nuxt-link to="#buchung" class="bg-accent hover:bg-opacity-75 text-white font-bold py-3 px-6 rounded-full">Jetzt buchen</nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Hier könntest du die Props, Data, Methods usw. definieren, die du benötigst
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für den Hero-Banner hinzufügen */
  .hero-banner {
    background-image: url('/hero-background.jpg'); /* Hier kommt dein Hintergrundbild */
    height: 400px; /* Passe die Höhe entsprechend an */
  }
  .bg-hero {
    background-color: #19232e; /* Fallback-Hintergrundfarbe */
  }
  .text-white {
    color: #f9f4f8; /* Weißer Text */
  }
  .bg-accent {
    background-color: #b258a9; /* Akzentfarbe für den CTA-Button */
  }
  </style>
  