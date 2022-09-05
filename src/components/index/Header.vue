<template>
  <header flex justify-between items-center p-2 bg-red h-20>
    <h1 class="h_100" lh-20 color-white font-semibold>Minimum BlockChain</h1>
    <Modal />
  </header>
</template>

<script setup lang='ts'>
import Modal from './Modal.vue'
</script>

<style scoped>
.h_100 {
  height: 100%;
}
</style>
