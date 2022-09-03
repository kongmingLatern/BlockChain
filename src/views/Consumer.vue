<template>
  <h1>Consumer</h1>
  <UserList />
</template>

<script setup lang="ts">
import type { ConsumerInfo } from "@/type";
import { reactive } from "vue";
import UserList from "../components/UserList.vue";
const userList: ConsumerInfo[] = reactive([{
  name: 'firstConsumer',
  payment: 10,
  wallet: 50
}, {

  name: 'SecondConsumer',
  payment: 15,
  wallet: 40
},
{

  name: 'ThirdtConsumer',
  payment: 20,
  wallet: 30
}

])
</script>

<style scoped>
</style>
