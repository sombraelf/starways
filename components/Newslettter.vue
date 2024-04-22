<template>
    <section class="newsletter-section bg-gray-100 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Newsletter</h2>
        <p class="text-center text-gray-700 mb-6">Erhalten Sie regelmäßig Updates, Angebote und Neuigkeiten über galaktische Reisen direkt in Ihr Postfach.</p>
        <form @submit.prevent="subscribe" class="flex justify-center">
          <div class="flex items-center border rounded-lg overflow-hidden">
            <input v-model="email" type="email" class="px-4 py-2 border-r border-gray-300 text-gray-800 bg-white" placeholder="Ihre E-Mail-Adresse">
            <button type="submit" class="px-8 bg-accent text-white font-bold py-2">Abonnieren</button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      subscribe() {
        // Hier würde die Logik für das Abonnieren des Newsletters implementiert werden
        console.log('E-Mail-Adresse abonniert:', this.email);
        // Beispiel: Zurücksetzen des E-Mail-Eingabefelds
        this.email = '';
        // Beispiel: Anzeigen einer Bestätigungsmeldung
        alert('Vielen Dank für Ihr Abonnement!');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für die Newsletter-Anmeldung hinzufügen */
  .newsletter-section {
    /* Hintergrundfarbe und Abstand */
  }
  .input-group {
    /* Stil für das Eingabefeld und den Button */
  }
  .bg-gray-100 {
    background-color: #f9f4f8; /* Hintergrundfarbe */
  }
  .text-accent {
    color: #b258a9; /* Akzentfarbe */
  }
  </style>
  