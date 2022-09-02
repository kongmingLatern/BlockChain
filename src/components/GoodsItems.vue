import { GoodsItem } from '../type';
<template>
  <tr v-for="item in goods" :key="item.name">
    <td font-semibold>{{ item.name }}</td>
    <td>{{ item.price }} BTB</td>
    <td>
      <router-link to="" decoration-none>购买</router-link>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { GoodsItem } from '@/type';
defineProps<{
  goods: GoodsItem[]
}
>();
</script>

<style scoped>
</style>
