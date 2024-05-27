<template>
  <section id="uber-uns" class="about bg-[#0d0d0d] text-[#d2cfcd] p-8">
    <h2 class="text-3xl font-bold text-center mb-8">Über uns</h2>
    <div class="max-w-2xl mx-auto text-center">
      <p class="mb-4">Starways ist das erste Reisebüro, das kommerzielle Flugreisen zu außerplanetarischen Zielen anbietet. Gemeinsam mit SpaceX ermöglichen wir Ihnen atemberaubende Reisen zu Planeten wie Mars, Saturn oder dem Mond. Unser Ziel ist es, Ihnen eine unvergessliche Reise zu bieten, bei der Sie sich um nichts kümmern müssen.</p>
      <p class="mb-4">Unsere erfahrenen Astronauten und das Team von Starways stehen Ihnen jederzeit zur Seite, um sicherzustellen, dass Ihre Reise sicher und komfortabel ist. Buchen Sie bei uns und erleben Sie das Abenteuer Ihres Lebens!</p>
    </div>
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
      if (hash === '#uber-uns') {
        const element = document.getElementById('uber-uns');
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
