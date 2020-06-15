<template>
  <div class="home">
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </router-link>
      </li>
    </ul>

  </div>


</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    show() {
      Toast({
        message: "home",
        position: "bottom",
        duration: 3000,
        iconClass: "glyphicon glyphicon-heart myheart"
      });
    }
  }
};
</script>

<style scoped>
.home {
  background-color: pink;
}
h1,
h2 {
  font-weight: normal;
}
</style>
