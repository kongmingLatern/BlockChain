<template>
  <a-table :columns="columns" :data-source="userList" bordered>
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
    // className: "column-money",
    dataIndex: "payment",
  },
];

export default defineComponent({
  props: {
    userList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {
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
