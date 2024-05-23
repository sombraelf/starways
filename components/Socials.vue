<template>
    <section class="socials bg-[#110d0f] text-[#d2cfcd] p-8">
      <h2 class="text-3xl font-bold text-center mb-8">Folgen Sie uns auf Instagram</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="post in instagramPosts" :key="post.id" class="instagram-post">
          <img :src="post.image" :alt="post.alt" class="w-full h-full object-cover">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        instagramPosts: [
          { id: 1, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 1' },
          { id: 2, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 2' },
          { id: 3, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 3' },
          { id: 4, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 4' },
          { id: 5, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 5' },
          { id: 6, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 6' },
          { id: 7, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 7' },
          { id: 8, image: 'https://via.placeholder.com/300', alt: 'Beispielbild 8' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .instagram-post img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  </style>
  