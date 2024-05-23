<template>
    <section class="last-minute bg-[#110d0f] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Last Minute Angebot</h2>
      <div class="offer border border-[#d2cfcd] p-4 flex flex-col md:flex-row items-center">
        <img :src="pluto.image" alt="Pluto" class="mb-4 md:mb-0 md:mr-4 w-full md:w-1/2 object-cover">
        <div class="details w-full md:w-1/2">
          <h3 class="text-xl font-bold mb-2">{{ pluto.name }}</h3>
          <p class="mb-4">{{ pluto.shortDescription }}</p>
          <p class="text-2xl mb-4">
            <span class="line-through mr-2">€{{ pluto.originalPrice }}</span>
            <span class="text-[#ff6347]">€{{ pluto.discountedPrice }}</span>
          </p>
          <button @click="selectPlanet(pluto)" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white">
            Mehr erfahren
          </button>
        </div>
      </div>
  
      <transition name="fade">
        <div v-if="selectedPlanet" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div class="bg-[#110d0f] p-8 rounded-lg max-w-3xl w-full relative max-h-full overflow-y-auto">
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
        pluto: {
          id: 5,
          name: 'Pluto',
          image: 'https://via.placeholder.com/300x150?text=Pluto',
          images: [
            'https://via.placeholder.com/300x150?text=Pluto+1',
            'https://via.placeholder.com/300x150?text=Pluto+2',
            'https://via.placeholder.com/300x150?text=Pluto+3'
          ],
          shortDescription: 'Entdecken Sie den mysteriösen Pluto.',
          description: 'Der Pluto, bekannt als der zwergplanet in unserem Sonnensystem, bietet eine faszinierende Landschaft aus Eis und Felsen. Entdecken Sie seine einzigartigen geologischen Merkmale und erleben Sie ein Abenteuer, das Sie nie vergessen werden.',
          originalPrice: 80000,
          discountedPrice: 60000,
          basePrice: 60000
        },
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
  .offer img {
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
  