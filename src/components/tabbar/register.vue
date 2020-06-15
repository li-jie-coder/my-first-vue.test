<template>
  <div class="register">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
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
.register{
  background-color: pink;
}
h1,
h2 {
  font-weight: normal;
}
</style>
