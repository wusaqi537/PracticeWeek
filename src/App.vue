<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main-content {
    flex: 1;
  }
}
</style>