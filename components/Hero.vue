<template>
  <section class="hero text-[#d2cfcd] flex flex-col justify-center items-center text-center p-8 relative z-0">
    <div class="hero-video-container absolute inset-0 overflow-hidden">
      <video autoplay loop muted class="hero-video absolute inset-0 w-full h-full object-cover">
        <source src="https://www.spacex.com/media/TankerDock_16x9.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay absolute inset-0 bg-black opacity-20"></div>
    </div>
    <h1 class="text-4xl md:text-6xl font-bold mb-4 relative z-10">Erleben Sie galaktische Abenteuer</h1>
    <p class="text-lg md:text-2xl mb-8 relative z-10">Reisen Sie zu den Sternen und entdecken Sie neue Welten mit Starways</p>
    <nuxt-link
      to="#last-minute-section"
      class="border border-[#d2cfcd] text-[#d2cfcd] px-8 py-4 text-lg hover:border-white hover:text-white relative z-10"
    >
      Angebote entdecken
    </nuxt-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  min-height: 70vh;
}

.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101%;
}

.hero-video {
  width: 100%;
  height: 100%;
}

.hero-overlay {
  opacity: 0.8;
}

/* Stilisierung des Textes und der Buttons */
.hero h1,
.hero p,
.hero nuxt-link {
  position: relative;
}
</style>
