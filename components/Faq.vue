<template>
    <section class="faq bg-[#0d0d0d] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Häufig gestellte Fragen</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="faq in faqs" :key="faq.id" class="faq-item border-b border-white pb-4">
          <h3 
            @click="toggle(faq.id)" 
            class="cursor-pointer text-xl font-bold flex justify-between items-center"
          >
            {{ faq.question }}
            <span v-if="faq.open" class="transform rotate-180">&#9650;</span>
            <span v-else class="transform">&#9660;</span>
          </h3>
          <p v-if="faq.open" class="mt-2">{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            id: 1,
            question: 'Wie buche ich eine Reise?',
            answer: 'Sie können eine Reise direkt auf unserer Webseite über die "Jetzt buchen"-Schaltfläche buchen.',
            open: false
          },
          {
            id: 2,
            question: 'Welche Zahlungsarten akzeptieren Sie?',
            answer: 'Wir akzeptieren alle gängigen Kreditkarten sowie PayPal.',
            open: false
          },
          {
            id: 3,
            question: 'Wie kann ich meine Buchung stornieren?',
            answer: 'Sie können Ihre Buchung innerhalb von 24 Stunden kostenlos stornieren. Kontaktieren Sie dafür unseren Kundenservice.',
            open: false
          }
        ]
      };
    },
    methods: {
      toggle(id) {
        this.faqs = this.faqs.map(faq => 
          faq.id === id ? { ...faq, open: !faq.open } : faq
        );
      }
    }
  };
  </script>
  
  <style scoped>
  .faq-item h3 {
    transition: color 0.2s;
  }
  .faq-item h3:hover {
    color: #ffffff;
  }
  </style>
  