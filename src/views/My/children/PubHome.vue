<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="发布房源"
      class="top-nav"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <!-- 房源信息 -->
  </div>
</template>

<script>
export default {
  name: 'myPick',
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
//头部房屋管理导航栏
.top-nav {
  background-color: #21b97a;
  color: #fff;
  /deep/.van-nav-bar__title {
    color: #fff;
    font-size: 18px;
    white-space: nowrap;
    font-weight: normal;
  }
  /deep/.van-icon,
  .van-icon-arrow-left,
  .van-nav-bar__arrow {
    color: #fff;
  }
}
</style>
