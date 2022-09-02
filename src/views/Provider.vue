<template>
  <h1>Provider</h1>
  <ProviderTable v-for="item in sellers" :key="item.name" :seller="item.name" :goodsItem="item.goodsItem" />
</template>

<script setup lang="ts">
import ProviderTable from "@/components/ProviderTable.vue";
import type { Seller } from "@/type";

const sellers: Seller[] = [{
  name: "Ming",
  payLoad: 2,
  goodsItem: [{
    id: 1,
    name: "苹果",
    price: 5
  }, {
    id: 2,
    name: "香蕉",
    price: 3
  }, {
    id: 3,
    name: "西瓜",
    price: 7
  }],
},
{
  name: "Li",
  payLoad: 3,
  goodsItem: [{
    id: 1,
    name: "苹果",
    price: 2
  }, {
    id: 2,
    name: "香蕉",
    price: 5
  }, {
    id: 3,
    name: "西瓜",
    price: 10
  }],
},
{
  name: "Third",
  payLoad: 4,
  goodsItem: [{
    id: 1,
    name: "苹果",
    price: 2
  }, {
    id: 2,
    name: "香蕉",
    price: 3
  }, {
    id: 3,
    name: "西瓜",
    price: 12
  }],
}
]

</script>
