<template>
  <div>
    <h1>
      newsContent组件
      <br />
      {{url}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "newsContent",
  data() {
    return {
      url: this.$route.path
    };
  }
};
</script>

<style scoped>
</style>