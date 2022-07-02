<template>
  <div>
    <!-- 二级路由 -->
    <router-view />

    <van-tabbar route v-show="$store.state.isshownavbar">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/info" icon="description"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import '@/store/index'
export default {
  name: 'homeIndex',
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
