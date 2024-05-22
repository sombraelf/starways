<template>
    <section class="planets bg-[#110d0f] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Unsere Reiseziele</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="planet in planets" :key="planet.id" class="planet-card border border-[#d2cfcd] p-4">
          <img :src="planet.image" :alt="planet.name" class="mb-4">
          <h3 class="text-xl font-bold mb-2">{{ planet.name }}</h3>
          <p class="mb-4">{{ planet.shortDescription }}</p>
          <button @click="selectPlanet(planet)" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white">
            Mehr erfahren
          </button>
        </div>
      </div>
  
      <transition name="fade">
        <div v-if="selectedPlanet" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div class="bg-[#110d0f] p-8 rounded-lg max-w-3xl w-full relative">
            <button @click="closeModal" class="absolute top-4 right-4 text-2xl text-white">&times;</button>
            <h3 class="text-2xl font-bold mb-4">{{ selectedPlanet.name }}</h3>
            <div class="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img v-for="(image, index) in selectedPlanet.images" :key="index" :src="image" :alt="`${selectedPlanet.name} image ${index + 1}`">
            </div>
            <p class="mb-4">{{ selectedPlanet.description }}</p>
            <h4 class="text-xl font-bold mb-2">Buchungsdetails</h4>
            <form @submit.prevent="bookTrip">
              <div class="mb-4">
                <label class="block mb-2">Reisedatum:</label>
                <input type="date" v-model="bookingDetails.date" class="bg-[#110d0f] border border-[#d2cfcd] p-2 w-full">
              </div>
              <div class="mb-4">
                <label class="block mb-2">Flugklasse:</label>
                <select v-model="bookingDetails.class" class="bg-[#110d0f] border border-[#d2cfcd] p-2 w-full" @change="updatePrice">
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block mb-2">Anzahl der Reisenden:</label>
                <input type="number" v-model="bookingDetails.travelers" min="1" class="bg-[#110d0f] border border-[#d2cfcd] p-2 w-full" @input="updatePrice">
              </div>
              <div class="mb-4">
                <p class="text-xl">Gesamtpreis: €{{ totalPrice }}</p>
              </div>
              <button type="submit" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white">
                Jetzt buchen
              </button>
            </form>
          </div>
        </div>
      </transition>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        planets: [
          {
            id: 1,
            name: 'Mars',
            image: '/images/mars.jpg', // Beispielpfad, bitte anpassen
            images: ['/images/mars1.jpg', '/images/mars2.jpg', '/images/mars3.jpg'], // Beispielpfade, bitte anpassen
            shortDescription: 'Erkunden Sie den roten Planeten.',
            description: 'Der Mars, unser Nachbarplanet, bietet eine atemberaubende Landschaft mit seiner roten Oberfläche und faszinierenden Tälern. Erleben Sie unvergessliche Sonnenaufgänge und die Möglichkeit, in einer Weltraumkolonie zu wohnen.',
            basePrice: 100000 // Basispreis in Euro
          },
          {
            id: 2,
            name: 'Saturn',
            image: '/images/saturn.jpg', // Beispielpfad, bitte anpassen
            images: ['/images/saturn1.jpg', '/images/saturn2.jpg', '/images/saturn3.jpg'], // Beispielpfade, bitte anpassen
            shortDescription: 'Besuchen Sie die Ringe des Saturn.',
            description: 'Der Saturn ist bekannt für seine markanten Ringe. Genießen Sie den spektakulären Anblick der Ringe und entdecken Sie die zahlreichen Monde dieses gasförmigen Riesen.',
            basePrice: 150000 // Basispreis in Euro
          },
          {
            id: 3,
            name: 'Mond',
            image: '/images/moon.jpg', // Beispielpfad, bitte anpassen
            images: ['/images/moon1.jpg', '/images/moon2.jpg', '/images/moon3.jpg'], // Beispielpfade, bitte anpassen
            shortDescription: 'Ein Spaziergang auf dem Mond.',
            description: 'Unser nächstgelegener Himmelskörper bietet eine einzigartige Möglichkeit, auf seiner Oberfläche zu wandeln und die Erde von einer ganz neuen Perspektive zu sehen.',
            basePrice: 50000 // Basispreis in Euro
          },
          {
            id: 4,
            name: 'Venus',
            image: '/images/venus.jpg', // Beispielpfad, bitte anpassen
            images: ['/images/venus1.jpg', '/images/venus2.jpg', '/images/venus3.jpg'], // Beispielpfade, bitte anpassen
            shortDescription: 'Erleben Sie die Venus.',
            description: 'Die Venus, auch bekannt als Morgen- und Abendstern, bietet eine beeindruckende Atmosphäre und interessante geologische Formationen. Erforschen Sie die Geheimnisse unseres Zwillingsplaneten.',
            basePrice: 120000 // Basispreis in Euro
          }
        ],
        selectedPlanet: null,
        bookingDetails: {
          date: '',
          class: 'Economy',
          travelers: 1
        },
        classMultipliers: {
          'Economy': 1,
          'Business': 1.5,
          'First Class': 2
        }
      };
    },
    computed: {
      totalPrice() {
        if (!this.selectedPlanet) return 0;
        const basePrice = this.selectedPlanet.basePrice;
        const classMultiplier = this.classMultipliers[this.bookingDetails.class];
        const travelers = this.bookingDetails.travelers;
        return (basePrice * classMultiplier * travelers).toLocaleString('de-DE');
      }
    },
    methods: {
      selectPlanet(planet) {
        this.selectedPlanet = planet;
        this.resetBookingDetails();
      },
      closeModal() {
        this.selectedPlanet = null;
      },
      resetBookingDetails() {
        this.bookingDetails = {
          date: '',
          class: 'Economy',
          travelers: 1
        };
      },
      updatePrice() {
        // Trigger a recalculation of the total price
        this.$forceUpdate();
      },
      bookTrip() {
        alert(`Reise zum ${this.selectedPlanet.name} am ${this.bookingDetails.date} in der ${this.bookingDetails.class} Klasse für ${this.bookingDetails.travelers} Reisende gebucht! Gesamtpreis: €${this.totalPrice}`);
        this.closeModal();
      }
    }
  };
  </script>
  
  <style scoped>
  .planet-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  