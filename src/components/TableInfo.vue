<template>
  <div border border-collapse text-center h-37 w-40 lh-7>
    <header border-b-solid>用户：{{ userInfo.name }}</header>
    <main border-b-solid>
      <div>出资：<span font-semibold color-red>{{ userInfo.price }}</span></div>
      <div>年龄：{{ userInfo.age }}</div>
      <div>余额：<span color-blue>{{ userInfo.wallet }}</span></div>
    </main>
    <footer>
      <router-link to="" decoration-none>充值</router-link>
    </footer>
  </div>
</template>

<script setup lang='ts'>
const userInfo = {
  name: '小明',
  age: 20,
  wallet: '100BTB',
  price: '10BTB'
}
</script>

<style scoped>
</style>
