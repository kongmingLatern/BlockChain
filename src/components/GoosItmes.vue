<template>
  <li v-for="item in goods" :key="item.name">
    <div flex flex-row justify-between w-50>
      <span class="">{{ item.name }}</span>
      <span class="">购买</span>
      <span class="">{{ item.price }} 元</span>
    </div>
  </li>
</template>

<script setup lang='ts'>
defineProps<{
  goods: {
    name: string;
    price: number;
  }[]
}>()
</script>

<style scoped>
</style>