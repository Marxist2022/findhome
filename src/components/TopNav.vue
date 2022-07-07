<template>
  <div>
    <van-nav-bar
      :title="title"
      class="top-nav"
      left-arrow
      fixed
      @click-left="$router.back()"
    >
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  name: 'TopNav',
  props: {
    title: {
      type: String,
      required: true
    }
  },
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
  height: 45px;
  width: 100%;
  z-index: 2;
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
