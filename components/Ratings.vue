<template>
    <section class="ratings-section bg-gray-100 py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Kundenbewertungen</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Kundenbewertungen -->
          <div v-for="(review, index) in reviews" :key="index" class="review-card bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="mr-2 flex">
                <template v-for="i in 5">
                  <svg v-if="i <= review.rating" class="h-5 w-5 fill-current text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 1l2.5 6.5 7-2L16 10l6 4-7 2L12.5 19 10 12 7.5 19 4 16l6-4-1.5-4.5L10 1z"/>
                  </svg>
                  <svg v-else class="h-5 w-5 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 1l2.5 6.5 7-2L16 10l6 4-7 2L12.5 19 10 12 7.5 19 4 16l6-4-1.5-4.5L10 1z"/>
                  </svg>
                </template>
              </div>
              <span class="text-gray-700">{{ review.date }}</span>
            </div>
            <p class="text-gray-700">{{ review.comment }}</p>
            <p class="text-gray-500 mt-2">{{ review.author }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          { rating: 5, date: '01.04.2024', comment: 'Eine erstaunliche Reise! Ich kann es kaum erwarten, wieder mit starways zu fliegen.', author: 'Laura Müller' },
          { rating: 4, date: '25.03.2024', comment: 'Fantastische Erfahrung! Die Crew war äußerst professionell und das Raumschiff war komfortabel.', author: 'Jonas Schmidt' },
          { rating: 5, date: '18.03.2024', comment: 'Das war das Abenteuer meines Lebens! Ich habe Dinge gesehen, die ich mir nie erträumt hätte.', author: 'Sophie Wagner' },
          { rating: 3, date: '10.03.2024', comment: 'Die Reise war gut, aber ich hätte mir mehr Zeit auf dem Mars gewünscht.', author: 'Alexander Becker' },
          { rating: 4, date: '05.03.2024', comment: 'Tolle Erfahrung! Die Aussicht vom Raumschiff aus war atemberaubend.', author: 'Lisa Meier' },
          { rating: 5, date: '02.03.2024', comment: 'Ich bin sprachlos! Diese Reise hat meine Erwartungen übertroffen.', author: 'Maximilian Schulz' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für die Kundenbewertungen-Sektion hinzufügen */
  .ratings-section {
    /* Hintergrundfarbe und Abstand */
  }
  .review-card {
    /* Kundenbewertungs-Karten-Styling */
  }
  .bg-gray-100 {
    background-color: #f9f4f8; /* Hintergrundfarbe */
  }
  .text-gray-700 {
    color: #19232e; /* Textfarbe */
  }
  .text-gray-500 {
    color: #7d7d7d; /* Textfarbe für Autor */
  }
  .text-accent {
    fill: #b258a9; /* Farbe der Sterne */
  }
  </style>
  