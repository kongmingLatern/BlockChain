<template>
  <h1>Provider</h1>
  <ul ml-10>
    <GoodsItmes :goods="goodsItem" />
  </ul>

</template>

<script setup lang='ts'>
import { reactive } from "vue";
import GoodsItmes from "../components/GoodsItmes.vue";
import type { GoodsItem } from '../type';
const goodsItem = reactive<GoodsItem[]>([
  {
    id: 1,
    name: "apple",
    price: '10BTB',
  },
  {
    id: 2,
    name: "banana",
    price: '10BTB',
  },
  {
    id: 3,
    name: "orange",
    price: '15BTB',
  },
]);
</script>

<style scoped>
</style>
