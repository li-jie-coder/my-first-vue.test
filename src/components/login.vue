<template>
  <div>
    <h2>login组件</h2>
    <mt-button type="primary" @click="show" :disabled="flag">primary</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      flag:false
    };
  },
  methods: {
    show() {
      this.flag = true;
      // Toast({
      //   message: "提示",
      //   position: "bottom",
      //   duration: 3000,
      //   iconClass: "icon icon-success"
      // });
      let instance = Toast("提示信息");
      setTimeout(() => {
        instance.close();
        this.flag = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
