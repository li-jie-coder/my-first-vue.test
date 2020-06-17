<template>
  <div class="container">
    <!-- 头部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 主内容 -->
    <transition>
      <router-view class="myview"></router-view>
    </transition>
    <!-- 导航栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/login" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link to="/register" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link to="/shopping" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- scoped  实现原理是 给下面的每个类都添加了一个属性 data-xxx  并分别给他相应的css样式 -->
<style scoped>
.container {
  overflow-x: hidden;
  margin-top: 40px;
  margin-bottom: 60px;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(-100%);
}

.v-enter-active {
  transition: all 0.4s ease;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
