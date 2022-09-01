<template>
  <li v-for="item in goods" :key="item.name">
    <div flex flex-row justify-between w-50>
      <span class="">{{ item.name }}</span>
      <span class="">{{ item.price }} 元</span>
      <router-link to="" decoration-none>购买</router-link>
    </div>
  </li>
</template>

<script setup lang='ts'>
defineProps<{
  goods: {
    id: number | string,
    name: string;
    price: number;
  }[]
}>()
</script>

<style scoped>
</style>