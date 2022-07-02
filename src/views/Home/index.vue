<template>
  <div class="home-container">
    <!-- //1轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="image in homeSwiper" :key="image.id">
          <img :src="'http://liufusong.top:8080' + image.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- //1轮播图 -->

    <!-- //2搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        show-action
        label="地址"
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <!-- //2搜索框 -->
    <div class="grid-container">
      <div class="grid">
        <div>
          <img src="@/assets/imgs/1.png" alt="" />
          <div class="text">整租</div>
        </div>
        <div>
          <img src="@/assets/imgs/2.png" alt="" />
          <div class="text">合租</div>
        </div>
        <div>
          <img src="@/assets/imgs/3.png" alt="" />
          <div class="text">地图找房</div>
        </div>
        <div>
          <img src="@/assets/imgs/4.png" alt="" />
          <div class="text">去出租</div>
        </div>
      </div>
    </div>
    <!-- //2搜索框 -->
    <!-- //3 -->
    <div class="group-container">
      <div class="top">
        <div class="left">租房小组</div>
        <div class="right">更多</div>
      </div>
      <!-- 每个元素的两侧间隔相等 -->
      <!-- <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="item in homegroup" :key="item.id" text="hah ">
          <van-image :src="'http://liufusong.top:8080' + item.imgSrc" />
        </van-grid-item>
      </van-grid> -->

      <!-- 底部文字 -->
      <van-grid :gutter="10" :column-num="2" direction="horizontal">
        <van-grid-item v-for="item in homegroup" :key="item.id">
          <i slot="icon">
            <img :src="'http://liufusong.top:8080' + item.imgSrc" alt=""
          /></i>
          <div slot="text">
            <p>{{ item.desc }}</p>
            <p>{{ item.title }}</p>
          </div>
        </van-grid-item>
      </van-grid>

      <!-- //3 -->
    </div>
  </div>
</template>

<script>
import { swiper, getghomeroups } from '@/api/hone'

export default {
  name: 'homeIndex',
  created () {
    this.loadHomeSwiper()
    this.loadHomeGroups()
  },
  data () {
    return {
      value: '1',
      homeSwiper: [], // 轮播图
      place: 'AREA|88cff55c-aaa4-e2e0',
      homegroup: []// 租房小组
    }
  },
  methods: {
    onSearch () { },
    // 获取首页轮播图
    async loadHomeSwiper () {
      try {
        // 启动获取轮播图信息api
        const { data } = await swiper()
        console.log(data)
        this.homeSwiper = data.body
        console.log(data.description)
        console.log(this.homeSwiper)
      } catch (err) {
        this.$toast(err.description)
      }
    },
    // 租房小组
    async loadHomeGroups () {
      try {
        // 启动租房小组api
        const { data } = await getghomeroups(this.place)// 传递搜索地址
        console.log('123', data)
        this.homegroup = data.body
        console.log(data.description)
      } catch (err) {
        this.$toast(err.description)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// 轮播图的自带属性
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 212px;
  width: 100%;
  vertical-align: top;

  background-color: #39a9ed;
}
.home-container {
  background-color: #f6f5f6;

  position: relative;
  // 搜索框
  /deep/ .van-search {
    position: absolute;
    top: 25px;
    width: 100%; //宽度
    padding: 0 10px;
    height: 24px; //高度
    z-index: 2;
    background-color: transparent;
  }
}
.van-grid {
  width: 100%;
  height: 123px;
  /deep/.van-grid-item__content--clickable {
    padding: 0;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
//整租 合租 地图找房 去出租
.grid-container {
  background-color: #fff;
  width: 100%;
  height: 123px;
  display: flex;
  .grid {
    width: 100%;
    display: flex;
    margin: 10px 0;
    /deep/ div {
      flex: 1;
      text-align: center;
      // 图片
      img {
        width: 60px;
        height: 60px;
      }
      // 下面的文字
      .text {
        margin: 12px 0;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
// ---=-----=-=-=--
/deep/ .group-container {
  width: 100%;
  padding: 0 10px 10px 0px;
  .top {
    margin: 15px 0 15px 10px;
    font-size: 15px;
    // 子元素 左右分开
    display: flex;
    justify-content: space-between;

    // 租房小组
    .left {
      font-weight: bold;
    }
    //更多
    .right {
      // 文字靠右边
      text-align: right;
      width: 100px;
      color: #787d82;
    }
  }

  // ---
  .van-grid-item__content,
  .van-grid-item__content--center,
  .van-grid-item__content--surround,
  .van-hairline {
    display: flex;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
    div {
      font-size: 14px;
    }
  }
}
</style>
