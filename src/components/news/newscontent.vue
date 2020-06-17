<template>
  <div>
    <h1>
      newsContent组件
      <br />
      {{id}}
    </h1>

    <comment :id="id"></comment>
  </div>
</template>

<script>
import comment from "../comment/comment";
export default {
  name: "newsContent",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    comment
  }
};
</script>

<style scoped>
</style>