<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>用户出资金额</template>
    <!-- <template #footer></template> -->
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Payment",
    className: "column-money",
    dataIndex: "money",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
  },
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
