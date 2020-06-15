<template>
  <div class="newlist">
    <!-- <ul>
      <li v-for="(item, index) in newlist" :key="index">id:{{item.id}}----------name:{{item.name}}</li>
    </ul> -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://img2020.cnblogs.com/blog/35695/202006/35695-20200612200054109-486254558.png"
          />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://profile.csdnimg.cn/2/3/4/3_devmiao"
          />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://profile.csdnimg.cn/B/D/D/3_qq_35669619"
          />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newlist",
  data() {
    return {
      newlist: [
        { id: 1, name: "PDD" },
        { id: 2, name: "马飞飞" },
        { id: 3, name: "卢本伟" }
      ]
    };
  }
};
</script>

<style>
ul li {
  list-style-type: none;
  width: 100%;
  padding: 10px;
  border: dashed 1px solid;
}
</style>