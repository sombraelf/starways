<template>
  <section id="last-minute-section" class="last-minute bg-[#110d0f] text-[#d2cfcd] p-8 z-10">
    <h2 class="text-3xl font-bold text-center mb-8">Last Minute Angebote</h2>
    <div class="relative max-w-4xl mx-auto">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(offer, index) in offers" :key="index" class="w-full flex-shrink-0 p-4">
            <img :src="offer.image" :alt="offer.name" class="w-full h-64 object-cover mb-4 rounded-lg">
            <h3 class="text-xl font-bold mb-2">{{ offer.name }}</h3>
            <p class="mb-2">{{ offer.shortDescription }}</p>
            <div class="flex justify-between items-center mb-4">
              <span class="line-through text-red-500">€{{ offer.originalPrice }}</span>
              <span class="text-green-500">€{{ offer.discountedPrice }}</span>
            </div>
            <button @click="selectOffer(offer)" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white rounded-md">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-4">
        <span v-for="(offer, index) in offers" :key="index" @click="goToSlide(index)" class="w-3 h-3 mx-2 rounded-full cursor-pointer" :class="{'bg-[#d2cfcd]': currentIndex === index, 'bg-gray-500': currentIndex !== index}"></span>
      </div>
    </div>

    <transition name="fade">
      <div v-if="selectedOffer" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-20">
        <div class="bg-[#110d0f] p-8 rounded-lg max-w-3xl w-full relative max-h-full overflow-y-auto">
          <button @click="closeModal" class="absolute top-4 right-4 text-2xl text-white focus:outline-none">&times;</button>
          <h3 class="text-2xl font-bold mb-4">{{ selectedOffer.name }}</h3>
          <img :src="selectedOffer.image" :alt="selectedOffer.name" class="w-full h-64 object-cover mb-4 rounded-lg">
          <p class="mb-4">{{ selectedOffer.description }}</p>
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
      offers: [
        {
          name: 'Pluto',
          image: 'https://via.placeholder.com/600x400?text=Pluto',
          shortDescription: 'Erkunden Sie den Zwergplaneten.',
          description: 'Pluto bietet eine einzigartige Landschaft mit Eisbergen und geheimnisvollen Ebenen. Ein einmaliges Erlebnis in den Tiefen unseres Sonnensystems.',
          originalPrice: 200000,
          discountedPrice: 180000,
        },
        {
          name: 'Venus',
          image: 'https://via.placeholder.com/600x400?text=Venus',
          shortDescription: 'Erleben Sie die Venus.',
          description: 'Die Venus, auch bekannt als Morgen- und Abendstern, bietet eine beeindruckende Atmosphäre und interessante geologische Formationen. Erforschen Sie die Geheimnisse unseres Zwillingsplaneten.',
          originalPrice: 120000,
          discountedPrice: 108000,
        },
        {
          name: 'Jupiter',
          image: 'https://via.placeholder.com/600x400?text=Jupiter',
          shortDescription: 'Der größte Planet des Sonnensystems.',
          description: 'Erleben Sie die gigantischen Stürme und den großen roten Fleck des Jupiter. Ein Abenteuer auf dem größten Planeten unseres Sonnensystems.',
          originalPrice: 250000,
          discountedPrice: 225000,
        },
      ],
      currentIndex: 0,
      selectedOffer: null,
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
      if (!this.selectedOffer) return 0;
      const originalPrice = this.selectedOffer.originalPrice;
      const discountedPrice = this.selectedOffer.discountedPrice;
      return discountedPrice.toLocaleString('de-DE');
    }
  },
  methods: {
    selectOffer(offer) {
      this.selectedOffer = offer;
    },
    closeModal() {
      this.selectedOffer = null;
    },
    bookTrip() {
      alert(`Reise zum ${this.selectedOffer.name} am ${this.bookingDetails.date} in der ${this.bookingDetails.class} Klasse für ${this.bookingDetails.travelers} Reisende gebucht! Gesamtpreis: €${this.totalPrice}`);
      this.closeModal();
    },
    updatePrice() {
      // Trigger a recalculation of the total price
      this.$forceUpdate();
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 3000); // Automatisches Scrollen alle 3 Sekunden
  },
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.offers.length;
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
button {
  background: transparent;
  cursor: pointer;
}
</style>
