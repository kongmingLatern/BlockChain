<template>
  <div border border-collapse text-center h-37 w-40 lh-7>
    <header border-b-solid>用户：{{ userInfo.name }}</header>
    <main border-b-solid>
      <div>
        出资：<span font-semibold color-red>{{ userInfo.price }}</span>
      </div>
      <div>年龄：{{ userInfo.age }}</div>
      <div>
        余额：<span color-blue>{{ userInfo.wallet }}</span>
      </div>
    </main>
    <footer>
      <router-link to="" decoration-none>充值</router-link>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { UserInfoType } from "@/type";
const userInfo: UserInfoType = {
  id: 1,
  name: "小明",
  age: 20,
  wallet: "1000",
  price: "100",
};
</script>

<style scoped></style>
