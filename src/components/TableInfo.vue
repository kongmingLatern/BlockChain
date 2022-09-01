<template>
  <div border border-collapse text-center h-30 w-40 lh-7>
    <header border-b-solid>用户：{{ userInfo.name }}</header>
    <main border-b-solid>
      <div>年龄：{{ userInfo.age }}</div>
      <div>余额：{{ userInfo.wallet }}</div>
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
  wallet: 100
}
</script>

<style scoped>
</style>
