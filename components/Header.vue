<template>
  <header class="bg-[#110d0f] text-[#d2cfcd] p-4 flex justify-between items-center">
    <div class="text-2xl font-bold">
      <nuxt-link to="/">Starways</nuxt-link>
    </div>
    <nav class="hidden md:flex space-x-8">
      <nuxt-link to="#reiseziele" class="hover:text-white">Reiseziele</nuxt-link>
      <nuxt-link to="#uber-uns" class="hover:text-white">Über uns</nuxt-link>
      <nuxt-link to="#kontakt" class="hover:text-white">Kontakt</nuxt-link>
    </nav>
    <div class="hidden md:block">
      <nuxt-link
        to="#buchung"
        class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white"
      >
        Jetzt buchen
      </nuxt-link>
    </div>
    <div class="md:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg class="w-6 h-6 text-[#d2cfcd]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="absolute top-0 left-0 w-full bg-[#110d0f] text-[#d2cfcd] p-4 flex flex-col space-y-4 md:hidden">
      <nuxt-link to="#reiseziele" class="hover:text-white" @click="toggleMenu">Reiseziele</nuxt-link>
      <nuxt-link to="#uber-uns" class="hover:text-white" @click="toggleMenu">Über uns</nuxt-link>
      <nuxt-link to="#kontakt" class="hover:text-white" @click="toggleMenu">Kontakt</nuxt-link>
      <nuxt-link
        to="#buchung"
        class="border border-[#d2cfcd] text-[#d2cfcd] px-4 py-2 hover:border-white hover:text-white"
        @click="toggleMenu"
      >
        Jetzt buchen
      </nuxt-link>
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
