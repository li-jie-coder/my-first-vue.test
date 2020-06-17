<template>
  <div class="container">
    <h1>发表评论---father's id: {{id}}</h1>
    <hr style="border:1px solid #555555" />
    <textarea placeholder="开始你的BB 最多120字哈" rows="10"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <br />
    <!--评论内容 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentlist" :key="index">
        <div class="cmt-header">
          <div class="cmt-user">用户名: {{item.name}}</div>
          <div class="cmt-time">评论时间: {{item.time|dataFormate}}</div>
        </div>
        <div class="cmt-body">吊的匹，犀利骂</div>
      </div>

      <!--   <div class="cmt-item">
        <div class="cmt-header">
          <div class="cmt-user">用户名: 卢本伟</div>
          <div class="cmt-time">评论时间: 2020-10-04</div>
        </div>
        <div class="cmt-body">吊的匹，犀利骂</div>
      </div>

      <div class="cmt-item">
        <div class="cmt-header">
          <div class="cmt-user">用户名: 卢本伟</div>
          <div class="cmt-time">评论时间: 2020-10-04</div>
        </div>
        <div class="cmt-body">吊的匹，犀利骂</div>
      </div>
      -->
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      commentlist: []
    };
  },
  created() {
    this.getcomment();
  },
  methods: {
    getcomment() {
      var that = this;
      this.$axios.get("http://localhost:3000/list").then(function(response) {
        console.log(response.data);
        that.commentlist = response.data;
      });
    }
  },
  props: ["id"]
};
</script>

<style lang="css" scoped>
.cmt-list {
  width: 100%;
  font-size: 16px;
}
.cmt-list .cmt-item {
  background-color: rgb(240, 230, 230);
  height: 100px;
  margin: 10px 0;
}
.cmt-list .cmt-item .cmt-header {
  background-color: rgb(62, 219, 211);
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>