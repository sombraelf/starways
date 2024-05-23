<template>
    <section class="testimonials bg-[#110d0f] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Was unsere Kunden sagen</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card border border-[#d2cfcd] p-4">
          <div class="flex items-center mb-2">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h3 class="text-xl font-bold">{{ testimonial.name }}</h3>
              <div class="flex">
                <span v-for="n in 5" :key="n" class="text-yellow-400" :class="{'text-gray-500': n > testimonial.rating}">★</span>
              </div>
            </div>
          </div>
          <p class="italic">"{{ testimonial.review }}"</p>
          <p class="mt-2 text-right text-sm">{{ testimonial.destination }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            id: 1,
            name: 'Galaxia Sternenwanderer',
            avatar: '/images/avatar1.jpg', // Beispielpfad, bitte anpassen
            rating: 5,
            review: 'Eine unvergessliche Reise zum Mars! Die Landschaft war atemberaubend und der Service erstklassig.',
            destination: 'Mars'
          },
          {
            id: 2,
            name: 'Nova Lichtjahr',
            avatar: '/images/avatar2.jpg', // Beispielpfad, bitte anpassen
            rating: 4,
            review: 'Die Ringe des Saturn waren ein unglaubliches Erlebnis. Kann es kaum erwarten, wieder zu reisen!',
            destination: 'Saturn'
          },
          {
            id: 3,
            name: 'Orion Nebula',
            avatar: '/images/avatar3.jpg', // Beispielpfad, bitte anpassen
            rating: 5,
            review: 'Der Spaziergang auf dem Mond war ein wahr gewordener Traum. Danke, Starways!',
            destination: 'Mond'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonial-card img {
    object-fit: cover;
  }
  </style>
  