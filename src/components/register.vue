<template>
  <div>
    <h2>register组件</h2>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "Register",
  data() {
    return {};
  },
  methods: {
    show() {
      Toast({
        message: "Register",
        position: "bottom",
        duration: 3000,
        iconClass: "glyphicon glyphicon-heart myheart"
      });
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
