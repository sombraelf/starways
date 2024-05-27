<template>
    <section id="kontakt" class="contact bg-[#0d0d0d] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Kontakt</h2>
      <form class="max-w-lg mx-auto">
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name" class="bg-[#0d0d0d] border border-[#d2cfcd] p-2 w-full">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" class="bg-[#0d0d0d] border border-[#d2cfcd] p-2 w-full">
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Nachricht</label>
          <textarea id="message" class="bg-[#0d0d0d] border border-[#d2cfcd] p-2 w-full" rows="5"></textarea>
        </div>
        <button type="submit" class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white">
          Senden
        </button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    mounted() {
      this.scrollToSection();
    },
    methods: {
      scrollToSection() {
        const hash = window.location.hash;
        if (hash === '#kontakt') {
          const element = document.getElementById('kontakt');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Additional styling */
  </style>
  