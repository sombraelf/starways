<template>
    <section class="booking-section bg-gray-900 text-white py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Buche deine galaktische Reise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Formular für Buchung -->
          <div class="booking-form bg-gray-800 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Reiseoptionen</h3>
            <!-- Dropdown für Reiseziel -->
            <div class="mb-4">
              <label for="destination" class="block text-white font-bold mb-2">Reiseziel</label>
              <select v-model="selectedDestination" id="destination" name="destination" class="block w-full bg-gray-700 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:bg-gray-600 focus:border-gray-500">
                <option value="">Wähle ein Reiseziel</option>
                <option v-for="destination in destinations" :key="destination.slug" :value="destination.slug">{{ destination.name }} ({{ formatPrice(getDestinationPrice(destination.slug)) }} €)</option>
              </select>
            </div>
            <!-- Dropdown für Reiseklasse -->
            <div class="mb-4">
              <label for="class" class="block text-white font-bold mb-2">Reiseklasse</label>
              <select v-model="selectedClass" id="class" name="class" class="block w-full bg-gray-700 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:bg-gray-600 focus:border-gray-500">
                <option value="economy">Economy ({{ formatPrice(getClassPrice('economy')) }})</option>
                <option value="business">Business (+{{ formatPrice(getClassPrice('business')) }})</option>
                <option value="first-class">First Class (+{{ formatPrice(getClassPrice('first-class')) }})</option>
              </select>
            </div>
            <!-- Datumauswahl -->
            <div class="mb-4">
              <label for="date" class="block text-white font-bold mb-2">Datum</label>
              <input type="date" v-model="selectedDate" id="date" name="date" class="block w-full bg-gray-700 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:bg-gray-600 focus:border-gray-500">
            </div>
            <!-- Zusatzoptionen -->
            <div class="mb-4">
              <label class="block text-white font-bold mb-2">Zusätzliche Optionen</label>
              <div class="flex items-center mt-2">
                <input type="checkbox" id="shuttle" v-model="selectedUpsells.shuttle" class="mr-2">
                <label for="shuttle" class="text-sm">Shuttle-Service ({{ formatPrice(getUpsellPrice('shuttle')) }})</label>
              </div>
              <div class="flex items-center mt-2">
                <input type="checkbox" id="guided-tour" v-model="selectedUpsells.guidedTour" class="mr-2">
                <label for="guided-tour" class="text-sm">Geführte Tour ({{ formatPrice(getUpsellPrice('guidedTour')) }})</label>
              </div>
              <!-- Weitere Zusatzoptionen hier hinzufügen -->
            </div>
            <!-- Preis -->
            <div class="text-white font-bold mb-4">Gesamtpreis: {{ formatPrice(totalPrice) }} €</div>
            <!-- Buchungsbutton -->
            <button @click="submitBooking" class="bg-accent hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-full w-full">Jetzt buchen</button>
          </div>
          <!-- Bild -->
          <div class="booking-image">
            <img src="#" alt="Galaktische Reise" class="w-full h-auto rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDestination: '',
        selectedClass: 'economy',
        selectedDate: '',
        selectedUpsells: {
          shuttle: false,
          guidedTour: false
        },
        destinations: [
          {
            name: 'Mars',
            slug: 'mars',
            prices: {
              economy: 1000,
              business: 500,
              'first-class': 1000
            }
          },
          {
            name: 'Venus',
            slug: 'venus',
            prices: {
              economy: 1200,
              business: 700,
              'first-class': 1500
            }
          },
          {
            name: 'Jupiter',
            slug: 'jupiter',
            prices: {
              economy: 1500,
              business: 1000,
              'first-class': 2000
            }
          },
          {
            name: 'Saturn',
            slug: 'saturn',
            prices: {
              economy: 1800,
              business: 1300,
              'first-class': 2500
            }
          }
          // Weitere Reiseziele hier hinzufügen
        ]
      }
    },
    computed: {
      totalPrice() {
        let basePrice = this.getDestinationPrice(this.selectedDestination);
        let classPrice = this.getClassPrice(this.selectedClass);
        let upsellPrice = this.getUpsellPrice('shuttle') + this.getUpsellPrice('guidedTour');
        return basePrice + classPrice + upsellPrice;
      }
    },
    methods: {
      submitBooking() {
        // Logik für die Buchungsübermittlung hier einfügen
        console.log('Buchungsdaten:', {
          destination: this.selectedDestination,
          class: this.selectedClass,
          date: this.selectedDate,
          upsells: this.selectedUpsells
        });
        // Beispiel: Weiterleitung zur Bestätigungsseite
        this.$router.push('/booking-confirmation');
      },
      formatPrice(price) {
        return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
      },
      getDestinationPrice(destinationSlug) {
        let destination = this.destinations.find(destination => destination.slug === destinationSlug);
        return destination ? destination.prices[this.selectedClass] : 0;
      },
      getClassPrice(classType) {
        if (classType === 'economy') {
          return 0;
        } else {
          return this.getDestinationPrice(this.selectedDestination) - this.getDestinationPrice('economy');
        }
      },
      getUpsellPrice(upsell) {
        return this.selectedUpsells[upsell] ? 200 : 0; // Beispiel-Preise für Upsells
      }
    }
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für die Buchungs-Sektion hinzufügen */
  .booking-section {
    /* Hintergrundfarbe und Abstand */
  }
  .booking-form {
    /* Formular-Styling */
  }
  .booking-image img {
    /* Bild-Styling */
  }
  .bg-accent {
    background-color: #b258a9; /* Akzentfarbe für den Buchungsbutton */
  }
  </style>
  