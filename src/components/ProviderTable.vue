<template>
  <table border text-center m-0 m-auto w-100>
    <caption caption-top text-5 color-blue>
      <span float-left>{{ seller }}</span>
      <span float-right text-4 color-red>￥{{ sales }} / BTB</span>
    </caption>
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
  sales: number,
  goodsItem: GoodsItem[]
}>();
</script>

<style scoped>
</style>
