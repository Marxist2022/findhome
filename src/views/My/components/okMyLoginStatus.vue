<template>
  <div class="My_title__39w3V">
    <img
      class="My_bg__2j-VX"
      src="http://liufusong.top:8080/img/avatar.png"
      alt="背景图"
    />
    <div class="My_info__eOYeg">
      <div class="My_myIcon__3cKIV">
        <!-- 头像 -->
        <img
          class="My_avatar__2Fbh7"
          :src="'http://liufusong.top:8080' + userInfo.avatar"
        />
      </div>
      <div class="My_user__B6O1D">
        <!-- 昵称 -->
        <div class="My_name__3U2NB">{{ userInfo.nickname }}</div>
        <!-- 退出登录按钮 -->
        <div class="My_auth__1KSIg" @click="onLogout">
          <span>退出</span>
        </div>
        <div class="My_edit__3wqlv">
          编辑个人资料 <van-icon name="play" /><span class="My_arrow__1LOxs"
            ><i class="iconfont icon-arrow"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  created () {

  },
  data () {
    return {

    }
  },
  methods: {
    // 1退出登录
    onLogout () {
      this.$dialog.confirm({
        title: '确认退出吗'
      })
        .then(() => {
          // on confirm
          // console.log('确认执行这里')
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
          console.log('取消执行这里')
        })
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// 登录之后容器

.My_title__39w3V {
  z-index: 1;
  min-height: 300px;
  position: relative;
  // 大女孩底图
  .My_bg__2j-VX {
    width: 100%;
  }
  .My_info__eOYeg {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_myIcon__3cKIV {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .My_avatar__2Fbh7 {
        width: 100%;
        border-radius: 50%;
      }
    }
    .My_user__B6O1D {
      padding-top: 15px;
      .My_name__3U2NB {
        margin-top: -30px;
        margin-bottom: 5px;
      }
      .My_auth__1KSIg {
        margin-bottom: 15 0px;
        .My_auth__1KSIg span {
          border-radius: 30px;
          color: #fff;
          padding: 2px 15px;
          background: #21b97a;
          font-size: 12px;
        }
      }
      .My_edit__3wqlv {
        color: #999;
        font-size: 12px;
        margin-top: 25px; //调整编辑个人资料的相对于退出的高度
        .My_arrow__1LOxs {
          transform: rotate(-90deg);
          display: inline-block;
          margin-left: 3px;
        }
      }
    }
  }
}
// 退出按钮的样式
.My_auth__1KSIg span {
  border-radius: 30px;
  color: #fff;
  padding: 2px 15px;
  background: #21b97a;
  font-size: 12px;
}
</style>
