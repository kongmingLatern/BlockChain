<template>
  <h1>Provider</h1>
  <ProviderTable seller="Ming" :goodsItem="MinggoodsItem" />
  <ProviderTable seller="Li" :goodsItem="LigoodsItem" />
  <ProviderTable seller="Xiao" :goodsItem="XiaogoodsItem" />
</template>

<script setup lang="ts">
import ProviderTable from "@/components/ProviderTable.vue";
import type { GoodsItem } from "@/type";
import { reactive } from "vue";
const MinggoodsItem = reactive<GoodsItem[]>([
  {
    id: 1,
    name: "apple",
    price: "10BTB",
  },
  {
    id: 2,
    name: "banana",
    price: "10BTB",
  },
  {
    id: 3,
    name: "orange",
    price: "15BTB",
  },
]);

const LigoodsItem = reactive<GoodsItem[]>([
  {
    id: 1,
    name: "apple",
    price: "5BTB",
  },
  {
    id: 2,
    name: "banana",
    price: "9BTB",
  },
  {
    id: 3,
    name: "orange",
    price: "15BTB",
  },
]);

const XiaogoodsItem = reactive<GoodsItem[]>([
  {
    id: 1,
    name: "apple",
    price: "10BTB",
  },
  {
    id: 2,
    name: "banana",
    price: "10BTB",
  },
  {
    id: 3,
    name: "orange",
    price: "15BTB",
  },
]);
</script>
