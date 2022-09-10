<template>
  <div>
    <a-button @click="showModal">登录</a-button>
    <a-modal
      v-model:visible="visible"
      title="登录"
      @ok="handleOk"
      html-type="submit"
    >
      <a-form
        :model="formState"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item label="用户名" name="username">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 16 }">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { message } from "ant-design-vue";
import router from "@/router";
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: true,
    });
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = (e: MouseEvent) => {
      visible.value = false;
      // 用户名
      const { username, password } = formState;
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      message.success("登录成功，欢迎用户：" + username);
      router.push("/main");
    };
    return {
      visible,
      showModal,
      handleOk,
      formState,
    };
  },
});
</script>
