<template>
  <div>
    <TopNav title="房屋管理" />

    <div class="empty-container">
      <img src="http://liufusong.top:8080/img/not-found.png" />
      <p>
        您还没有房源，
        <a class="Rent_link__2yGRO" @click="$router.push('/pubhome')"
          >去发布房源</a
        >吧~
      </p>
    </div>
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
// 发布房源
.empty-container {
  padding-top: 45px;
  width: 375px;
  height: 174px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 150px;
    height: 98px;
    margin: 30px;
  }
  p {
    font-size: 14px;
    a.Rent_link__2yGRO {
      color: #33be85;
    }
  }
}
</style>
