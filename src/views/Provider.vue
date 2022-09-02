<template>
  <h1>Provider</h1>
  <table ml-10 border w-100 text-center>
    <th>商品名称</th>
    <th>最低售价</th>
    <th>购买</th>
    <GoodsItmes :goods="goodsItem" />
  </table>

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
