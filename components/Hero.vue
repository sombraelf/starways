<template>
  <section class="hero bg-[#110d0f] text-[#d2cfcd] flex flex-col justify-center items-center text-center p-8">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Erleben Sie galaktische Abenteuer</h1>
    <p class="text-lg md:text-2xl mb-8">Reisen Sie zu den Sternen und entdecken Sie neue Welten mit Starways</p>
    <nuxt-link
      to="#buchung"
      class="border border-[#d2cfcd] text-[#d2cfcd] px-8 py-4 text-lg hover:border-white hover:text-white"
    >
      Jetzt buchen
    </nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  background-image: url('/path/to/your/space-background.jpg'); /* Platzhalter für ein tatsächliches Bild */
  background-size: cover;
  background-position: center;
  min-height: 70vh;
}
</style>
