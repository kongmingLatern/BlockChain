<template>
  <li v-for="item in goods" :key="item.name">
    <div flex flex-row justify-between w-70 align-center mb-10 text-5>
      <span font-semibold>{{ item.name }}</span>
      <span>{{ item.price }} 元</span>
      <router-link to="" decoration-none>购买</router-link>
    </div>
  </li>
</template>

<script setup lang='ts'>
defineProps<{
  goods: {
    id: number | string,
    name: string;
    price: string;
  }[]
}>()
</script>

<style scoped>
</style>