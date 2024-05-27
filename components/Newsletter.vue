<template>
    <section class="newsletter bg-[#0d0d0d] text-[#d2cfcd] p-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Abonnieren Sie unseren Newsletter</h2>
      <p class="mb-8">Bleiben Sie auf dem Laufenden mit den neuesten galaktischen Reisen und Angeboten!</p>
      <form @submit.prevent="subscribe">
        <input 
          type="email" 
          v-model="email" 
          placeholder="Ihre E-Mail-Adresse" 
          class="bg-[#0d0d0d] border border-[#d2cfcd] p-2 w-full max-w-md mb-4"
          required
        >
        <button type="submit" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white">
          Abonnieren
        </button>
      </form>
      <p v-if="message" class="mt-4">{{ message }}</p>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: ''
      };
    },
    methods: {
      subscribe() {
        // Dummy subscription logic
        if (this.email) {
          this.message = 'Vielen Dank für Ihre Anmeldung!';
          this.email = '';
        } else {
          this.message = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional styles */
  </style>
  