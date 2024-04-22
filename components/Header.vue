<template>
    <header class="bg-black text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="logo">
          <nuxt-link to="/">
            <!-- Hier kommt das Logo von starways -->
            <img src="#" alt="Starways" class="h-8">
          </nuxt-link>
        </div>
        <nav class="hidden md:block">
          <ul class="flex space-x-4">
            <li><nuxt-link to="#reiseziele">Reiseziele</nuxt-link></li>
            <li><nuxt-link to="#ueber-uns">Über uns</nuxt-link></li>
            <li><nuxt-link to="#kontakt">Kontakt</nuxt-link></li>
          </ul>
        </nav>
        <div class="cta">
          <nuxt-link to="#buchung" class="bg-accent hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded">Jetzt buchen</nuxt-link>
        </div>
        <!-- Mobile navigation button (for small screens) -->
        <div class="block md:hidden">
          <!-- Hier könntest du ein mobiles Menü-Icon hinzufügen -->
          <!-- Zum Beispiel: -->
          <!-- <i class="fa fa-bars"></i> -->
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // Hier könntest du die Props, Data, Methods usw. definieren, die du benötigst
  }
  </script>
  
  <style scoped>
  /* Hier könntest du zusätzliches Styling für den Header hinzufügen */
  .bg-black {
    background-color: #19232e;
  }
  .text-white {
    color: #f9f4f8;
  }
  .bg-accent {
    background-color: #b258a9;
  }
  </style>
  