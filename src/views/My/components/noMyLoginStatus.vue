<template>
  <div class="My_title__39w3V">
    <img
      class="My_bg__2j-VX"
      src="http://liufusong.top:8080/img/profile/bg.png"
      alt="背景图"
    />
    <div class="My_info__eOYeg">
      <div class="My_myIcon__3cKIV">
        <img
          class="My_avatar__2Fbh7"
          src="http://liufusong.top:8080/img/profile/avatar.png"
          alt="icon"
        />
      </div>
      <div class="My_user__B6O1D">
        <div class="My_name__3U2NB">游客</div>
      </div>
      <div class="login-container">
        <div class="login-go">
          <span @click="$router.push('/login')">去登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  created () { },
  data () {
    return {}
  },
  methods: {

  },
  computed: {

  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// 大容器
.My_title__39w3V {
  z-index: 1;
  min-height: 300px;
  position: relative;
  // 底图
  .My_bg__2j-VX {
    width: 100%;
  }
  // 用户状态框
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
    // 用户头像容器
    .My_myIcon__3cKIV {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      // 头像图片
      .My_avatar__2Fbh7 {
        width: 100%;
        border-radius: 50%;
      }
    }
    // 游客字体
    .My_user__B6O1D {
      text-align: center;
      padding-top: 15px;
      display: block;
      .My_name__3U2NB {
        text-align: center;
        margin-top: -30px;
        display: block;
        margin-bottom: 10px;
      }
      //去登录容器
      /deep/ .My_edit__3wqlv {
        display: block;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
}
// 去登录按钮
.login-container {
  padding-top: 20px;
  position: relative;
  .login-go {
    background-color: #21b97a;
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color: #fff;
    position: absolute;
    top: -5px;
    left: 105px; //强行定位+
  }
}
</style>
