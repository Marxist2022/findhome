<template>
  <div class="my-container">
    <!-- //1登录成功的大图 -->
    <!-- 判断是有token，接收退出按钮 -->
    <okMyLoginStatus v-if="user && user.token" :userInfo="this.userInfo">
    </okMyLoginStatus>
    <noMyLoginStatus v-else> </noMyLoginStatus>
    <!-- //1 登录成功的大图 -->
    <!--//2 宫格图 -->
    <div>
      <van-grid clickable :column-num="3">
        <van-grid-item
          icon="star-o"
          text="我的收藏"
          to="mypick"
          @click="$store.state.isshownavbar = false"
        />
        <van-grid-item
          icon="wap-home-o"
          text="我的出租"
          to="myrent"
          @click="$store.state.isshownavbar = false"
        />
        <van-grid-item
          icon="clock-o"
          text="看房记录"
          to="my"
          @click="$store.state.isshownavbar = false"
        />
        <van-grid-item
          icon="idcard"
          text="成为房主"
          to="my"
          @click="$store.state.isshownavbar = false"
        />
        <van-grid-item
          icon="contact"
          text="个人资料"
          to="my"
          @click="$store.state.isshownavbar = false"
        />
        <van-grid-item
          icon="service-o"
          text="联系我们"
          to="my"
          @click="$store.state.isshownavbar = false"
        />
      </van-grid>
    </div>
    <!--//2 宫格图 -->
    <!-- //3地图 认识好客 加入好客 -->
    <div class="My_ad__1wZZj">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
    <!-- //3地图 认识好客 加入好客 -->
  </div>
</template>

<script>
import okMyLoginStatus from './components/okMyLoginStatus.vue'
import noMyLoginStatus from './components/noMyLoginStatus.vue'
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
import '@/store/index'
export default {
  name: 'myIndex',
  created () {
    if (this.user) {
      // 如果登录成功后台有token就启动获得用户信息事件
      this.loadUserInfo()
      console.log(123)
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    // 1加载用户资料 获取用户信息
    async loadUserInfo () {
      try {
        // 启动获取用户信息api
        const { data } = await getUserInfo()
        console.log(data)
        this.userInfo = data.body
        console.log(data.description)
      } catch (err) {
        this.$toast(err.description)
      }
    }
  },
  computed: {
    ...mapState(['user'])

  },
  watch: {},
  filters: {},
  components: { okMyLoginStatus, noMyLoginStatus }
}
</script>

<style scoped lang='less'>
.my-container {
  /deep/ .oklogin-img {
    width: 375px;
    height: 375px;
  }
}
// 小宫格的设置 &消除边框
.van-grid-item__content,
.van-grid-item__content--center,
.van-grid-item__content--clickable,
.van-hairline {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  /deep/ &::after {
    border-width: 0;
  }
}
// 宫格整体消除边框
.van-grid,
.van-hairline--top {
  width: 375px;
  height: 190px;
  /deep/ &::after {
    border-width: 0;
  }
}
// 底部 认识好客 加入好客
.My_ad__1wZZj {
  text-align: center;
  margin-top: 10px;
}
// 定位的按钮一个相对定位，子绝父相对
.oklogin-img {
  min-height: 300px;
  position: relative;
}
</style>
