<script setup lang="ts">
import Main from "@/views/Main.vue";
import Modal from '@/components/Main/Modal.vue';
</script>

<template>
  <header flex justify-between items-center p-2 bg-red h-20>
    <h1 class="h_100" lh-20 color-white font-semibold>Minimum BlockChain</h1>
    <Modal />
  </header>
  <Main></Main>
  <!-- <HomeView /> -->
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.h_100 {
  height: 100%;
}
</style>