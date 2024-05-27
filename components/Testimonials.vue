<template>
  <section class="testimonials bg-[#0d0d0d] text-[#d2cfcd] p-8">
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
          name: 'Sophie Müller',
          avatar: 'https://i.imgur.com/rLLHhgf.png', // Beispielbild, bitte ersetzen
          rating: 5,
          review: 'Die Reise zum Mars hat all meine Erwartungen übertroffen! Es war unglaublich, den roten Planeten aus der Nähe zu sehen. Die Landschaft war atemberaubend, und die Sternenwanderer-Crew sorgte für eine unvergessliche Erfahrung. Ich kann es kaum erwarten, wieder zu gehen!',
          destination: 'Mars'
        },
        {
          id: 2,
          name: 'Max Mustermann',
          avatar: 'https://i.imgur.com/rLLHhgf.png', // Beispielbild, bitte ersetzen
          rating: 4,
          review: 'Einmalige Erfahrung auf dem Saturn! Die Ringe waren atemberaubend, und die Reise war voller aufregender Momente. Starways hat sich als vertrauenswürdiger Reisepartner erwiesen, und ich freue mich darauf, mit ihnen wieder zu reisen.',
          destination: 'Saturn'
        },
        {
          id: 3,
          name: 'Lena Schmidt',
          avatar: 'https://i.imgur.com/rLLHhgf.png', // Beispielbild, bitte ersetzen
          rating: 5,
          review: 'Ein Spaziergang auf dem Mond war ein lebensveränderndes Erlebnis! Die Schwerelosigkeit, die Stille und die majestätische Aussicht auf die Erde haben mich tief berührt. Danke an das Starways-Team für diese unvergessliche Reise!',
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
