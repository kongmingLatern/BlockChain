<template>
  <h1>Goods</h1>
  <ul>
    <GoosItmes :goods="goodsItem" />
  </ul>

</template>

<script setup lang='ts'>
import { reactive } from "vue";
import GoosItmes from "../components/GoosItmes.vue";
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
