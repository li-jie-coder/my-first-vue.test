<template>
  <div class="div1">
    <h1>my组件</h1>
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
.div1 {
  background-color: rgb(139, 20, 20);
}
h1,
h2 {
  font-weight: normal;
}
</style>
