<template>
  <div class="login-container">
    <!-- //1头部标题栏 111111111-->
    <van-nav-bar
      class="top-nav"
      title="账号登录"
      left-arrow
      @click-left="topLeftFn"
    >
    </van-nav-bar>
    <!-- //1头部标题栏 22222222-->
    <!-- ------------------- ------------------- ------------------- -->
    <!--//2 账号密码表单 1111111111-->
    <van-form @submit="onSubmit">
      <!-- 账号输入框 -->
      <van-field
        v-model="user.username"
        name="username"
        placeholder="请输入账号"
      />
      <!-- 密码输入框 -->
      <van-field
        v-model="user.password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <!-- 登录按钮 -->
      <div>
        <van-button block type="info" native-type="submit">登 录</van-button>
      </div>
    </van-form>
    <!-- //2账号密码表单 22222222-->

    <!-- ------------------- ------------------- ------------------- -->
    <!-- //3下面没有账号，去注册 -->
    <div class="buttom-btn">
      <p class="buttom-text">还没有账号，去注册~</p>
    </div>
    <!-- //3下面没有账号，去注册 -->
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  name: 'loginIndex',
  created () {

  },
  data () {
    return {
      user: {
        username: 'lin123',
        password: 'lin123'
      }
    }
  },
  methods: {
    // 2.1登录按钮事件
    async onSubmit () {
      const user = this.user// 获取用户名
      const tryname = /[a-zA-Z]\w{5,8}$/ // 用户名正则
      const okname = tryname.test(this.user.username)// 判断用户名是否符合
      const trycode = /[a-zA-Z]\w{5,12}$/ // 密码正则
      const okcode = trycode.test(this.user.password)// 判断密码是否符合
      // console.log(okcode)
      // 加载中
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 加载的时候禁止点击其他页面
        duration: 0// 没网的时候一直旋转
      })
      // 校验账号密码表单是否为空
      if (this.user.username.trim() === '' || this.user.password.trim() === '') {
        this.$toast('用户名和密码不能为空')
      } else if (!okname) { // 账号格式验证
        this.$toast('用户名格式5-8位的字母' + '\n' + '和数字')
      } else if (!okcode) { // 密码格式验证
        this.$toast('密码格式5-12位的字母和' + '\n' + '数字')
      } else {
        // 是否成功校验
        try {
          const res = await login(user)
          console.log('登录成功', res)
          if (res.data.status === 200) {
            this.$toast({ // 登录成功轻提示
              message: res.data.description,
              icon: 'passed'
            })
            // 把返回来的token储存在store中
            this.$store.commit('setUser', res.data.body)// 1把请求回来的数据中的data的body存放在store中，可以变成硬通货共享
            console.log(this.$store.state.user.token)// 1打印钥匙
            this.$router.push({ name: 'my' })// 跳转到我的页面
            console.log(this.$store.state.user)// 打印store
          } else { // 失败轻提示
            this.$toast(res.data.description)
          }
        } catch (err) { // 这个不管用
          if (err.response.status === 400) {
            console.log('登录失败', err)
          }
        }
      }
    },

    topLeftFn () { // 顶部左侧箭头触发事件
      console.log(123)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
//大容器
.login-container {
  background-color: #fff;
  align-self: center;

  //顶部导航栏样式
  .top-nav {
    background-color: #21b97a;
    margin-bottom: 21px;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
    font-weight: 400;
    font-size: 18px;
  }
  // 向左箭头
  /deep/.van-icon,
  .van-icon-arrow-left,
  .van-nav-bar__arrow {
    color: #fff;
  }
  //账号密码表单
  .van-form {
    margin: 0 auto;
    width: 345px;
    height: 206px;
    margin-bottom: 30px;
    // 每行框
    .van-cell,
    .van-field {
      width: 345px;
      height: 60px;
      padding: 2px 0;
      line-height: 60px;
      border-bottom: 1px solid #eee;
      color: #000;
      font-size: 17px;
      background-color: transparent;
      margin-bottom: 12px;
    }
    // 登录按钮
    .van-button,
    .van-button--info,
    .van-button--normal,
    .van-button--block {
      margin-top: 24px;
      background-color: #1cb676;
      border: none;
      color: #fff;
      font-size: 18px;
      display: block;
      outline: 0 none;
      -webkit-appearance: none;
      padding: 0;
      text-align: center;
      font-size: 18px;
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      white-space: nowrap;
      color: #fff;
      background-color: #1cb676;
      border: 1px solid #1cb676;
      border-radius: 2px;
      width: 100%;
    }
  }
  //底部还没有账号，去注册的模块
  .buttom-btn {
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    .buttom-text {
      color: #666;
    }
  }
}

// 登录按钮
// 底部还没有账号去注册
</style>
