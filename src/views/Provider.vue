<template>
  <h1>Provider</h1>
  <ul ml-10>
    <GoodsItmes :goods="goodsItem" />
  </ul>

</template>

<script setup lang='ts'>
import { reactive } from "vue";
import GoodsItmes from "../components/GoodsItmes.vue";
const goodsItem = reactive([
  {
    id: 1,
    name: "apple",
    price: 100,
  },
  {
    id: 2,
    name: "banana",
    price: 200,
  },
  {
    id: 3,
    name: "orange",
    price: 300,
  },
]);
</script>

<style scoped>
</style>
