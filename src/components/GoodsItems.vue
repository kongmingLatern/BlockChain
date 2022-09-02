<template>
  <tr v-for="item in goods" :key="item.name">
    <td font-semibold>{{ item.name }}</td>
    <td>{{ item.price }} 元</td>
    <td>
      <router-link to="" decoration-none>购买</router-link>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{
  goods: {
    id: number | string;
    name: string;
    price: Readonly<string>;
  }[];
}>();
</script>

<style scoped></style>
