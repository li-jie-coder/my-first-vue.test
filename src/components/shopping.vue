<template>
  <div>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "shopping",
  data() {
    return {
        name:'shopping组件'
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>
body{
  background: rgb(212, 140, 209);  
  height: 100%;
}
h1,
h2 {
  font-weight: normal;
}
</style>
