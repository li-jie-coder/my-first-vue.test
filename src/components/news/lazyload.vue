<template>
  <div class="container">
    <img v-for="(img,index) in imageList" v-lazy="img" :key="index" />
  </div>
</template>

<script>
export default {
  name: "lazyload",
  data() {
    return {
      imageList: [
        "/static/image/1.jpg",
        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1592650771&di=da4058a79af71306d306d2ae4954b2eb&src=http://www.36588.com.cn:8080/ImageResourceMongo/UploadedFile/dimension/big/91768e4e-ea3f-44e1-81ce-6393adc110c8.png",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592660859972&di=89b16a66d016d8b15cf836e1a916e389&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F36%2F54%2F69%2F5905ff9fdd470.png%2521%2Ffwfh%2F804x829%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592660859972&di=eb31e152b17cd78ed07704bb82d68c89&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F10%2F54%2F87%2F0383f5d98058f8b46b369406a1391308.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592660859971&di=6df4aa0647f0a4b37811084874d523a5&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn00%2F133%2Fw640h1093%2F20180815%2Fee5c-hhtfwqr2128861.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592660859971&di=c9943170542d47bb438e4adb0e971ab3&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn02%2F133%2Fw640h1093%2F20180803%2Fdd4a-hhehtqh0054884.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592660859971&di=e32913249092366dd05eac25b329965f&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F80%2F74%2F50%2F5900377ef09a6.png%2521%2Ffwfh%2F804x823%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue"
      ]
    };
  }
};
</script>

<style lang="css" scoped>
.container{
    text-align: center;
}
img{
    width: 95%;
    margin-bottom: 5px;
}
</style>