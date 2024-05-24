<template>
  <section class="socials bg-[#110d0f] text-[#d2cfcd] p-8">
    <h2 class="text-3xl font-bold text-center mb-8">Folge uns auf Instagram</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(post, index) in instagramPosts" :key="index" class="instagram-post">
        <img :src="post.image" :alt="'Instagram post ' + (index + 1)" class="w-full h-full object-cover rounded-lg">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      instagramPosts: [
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+1' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+2' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+3' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+4' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+5' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+6' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+7' },
        { image: 'https://via.placeholder.com/300x300?text=Instagram+Post+8' },
      ]
    };
  }
};
</script>

<style scoped>
.instagram-post {
  height: 300px;
}
</style>
