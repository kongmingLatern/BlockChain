<template>
  <table border text-center m-0 m-auto w-100>
    <caption text-left caption-top text-5 color-orange>{{ seller }}</caption>
    <tr>
      <th>商品名称</th>
      <th>最低售价</th>
      <th>购买</th>
    </tr>
    <GoodsItems :goods="goodsItem" />
  </table>
</template>

<script setup lang="ts">
import type { GoodsItem } from "@/type";
import GoodsItems from "./GoodsItems.vue";
defineProps<{
  seller: string;
  goodsItem: GoodsItem[]
}>();
</script>

<style scoped>
</style>
