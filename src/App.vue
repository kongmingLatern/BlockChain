<script setup lang="ts">
import HomeView from "@/views/HomeView.vue";
import { ref } from "vue";
const age = ref(0)
const add  = () => {
  age.value ++
}
</script>

<template>
  <h1 text-center color-red font-semibold>Minimum BlockChain</h1>
  <HomeView />
  <button @click="add">点击+1</button>
  <br />
  <span text-blue>{{age}}</span>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>