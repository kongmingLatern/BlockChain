<template>
  <div>
    <a-button @click="showModal">登录</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <Form />
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Form from './Form.vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
  components: { Form }
});
</script>

