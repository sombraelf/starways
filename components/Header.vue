<template>
  <header class="bg-[#110d0f] text-[#d2cfcd] p-4 flex justify-between items-center">
    <div class="text-2xl font-bold">
      <nuxt-link to="/">Starways</nuxt-link>
    </div>
    <nav class="hidden md:flex space-x-8">
      <a href="#planets" class="hover:text-white">Reiseziele</a>
      <a href="#uber-uns" class="hover:text-white">Über uns</a>
      <a href="#kontakt" class="hover:text-white">Kontakt</a>
    </nav>
    <div class="hidden md:block">
      <a
        href="#last-minute-section"
        class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white"
      >
        Angebote entdecken
      </a>
    </div>
    <div class="md:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg v-if="!menuOpen" class="w-6 h-6 text-[#d2cfcd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="absolute top-0 left-0 w-full bg-[#110d0f] text-[#d2cfcd] p-4 flex flex-col space-y-4 md:hidden">
      <a href="#reiseziele" class="hover:text-white" @click="toggleMenu">Reiseziele</a>
      <a href="#uber-uns" class="hover:text-white" @click="toggleMenu">Über uns</a>
      <a href="#kontakt" class="hover:text-white" @click="toggleMenu">Kontakt</a>
      <a
        href="#last-minute"
        class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white"
        @click="toggleMenu"
      >
        Angebote entdecken
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .nav-hidden {
    display: none;
  }
}
</style>
