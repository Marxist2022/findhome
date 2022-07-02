<template>
  <div>
    <van-nav-bar
      title="收藏列表"
      class="top-nav"
      left-arrow
      @click-left="$router.push('/my'), ($store.state.isshownavbar = true)"
    />
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
