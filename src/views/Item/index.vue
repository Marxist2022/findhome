<template>
  <div>
    <!-- 头部导航栏 -->
    <TopNav :title="itemDetail.community"></TopNav>
    <!-- 头部导航栏 -->
    <div class="item-container">
      <div class="swipe">
        <!-- //1 ⬇⬇⬇⬇⬇ 轮播图 ⬇⬇⬇⬇⬇ -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item
            v-for="(img, index) in itemDetail.houseImg"
            :key="index"
            ><img :src="'http://liufusong.top:8080' + img" alt=""
          /></van-swipe-item>
        </van-swipe>
        <!-- //1 ⬆⬆⬆⬆⬆ 轮播图 ⬆⬆⬆⬆⬆ -->
      </div>
      <div class="price_type_area">
        <!-- //2 ⬇⬇⬇⬇⬇ 租金 房型 面积 ⬇⬇⬇⬇⬇ -->
        <div>
          <p>{{ itemDetail.price }}<span>/月</span></p>
          <p>租金</p>
        </div>
        <div>
          <p>{{ itemDetail.roomType }}</p>
          <p>房型</p>
        </div>
        <div>
          <p>{{ itemDetail.size }}平米</p>
          <p>面积</p>
        </div>
        <!-- //2 ⬆⬆⬆⬆⬆ 租金 房型 面积 ⬆⬆⬆⬆⬆ -->
      </div>
      <div class="three">
        <!-- //3 ⬇⬇⬇⬇⬇ 装修 朝向 楼层 类型 ⬇⬇⬇⬇⬇ -->
        <div>
          <div><span>装修:</span><span>精装</span></div>
          <div>
            <span>朝向:</span
            ><span v-for="(or, index) in itemDetail.oriented" :key="index">{{
              or
            }}</span>
          </div>
        </div>
        <div>
          <div>
            <span>楼层:</span><span>{{ itemDetail.floor }}</span>
          </div>
          <div><span>类型:</span><span>普通住宅</span></div>
        </div>
        <!-- //3 ⬆⬆⬆⬆⬆ 装修 朝向 楼层 类型 ⬆⬆⬆⬆⬆ -->
      </div>
    </div>
  </div>
</template>

<script>
import { getHouseDetail } from '@/api/item'
export default {
  created () {
    this.getHouseDetail()
  },
  data () {
    return {
      itemDetail: {}
    }
  },
  methods: {
    async getHouseDetail () {
      try {
        const res = await getHouseDetail(this.$store.state.item)
        console.log('111', res)
        this.itemDetail = res.data.body
      } catch (error) {
        console.log(error)
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
.item-container {
  padding-top: 45px;
  padding: 45px 15px 50px;
}

.swipe {
  height: 345px;
  border-bottom: 1px solid #cecece;
}
//第二层
.price_type_area {
  display: flex;
  align-items: center;
  justify-items: center;
  div {
    border-bottom: 1px solid #cecece;
    padding: 15px 0;
    margin: 15px 0;
    text-align: center;
    flex: 1;
    & > p:nth-child(1) {
      font-weight: 700;
      color: #fa5741;
      font-size: 18px;
      span {
        font-weight: 400;
        font-size: 12px;
      }
    }
    & > p:nth-child(2) {
      color: #999;
      font-size: 14px;
    }
  }
}
//第二层
//第3层
.three {
  height: 90px;
  font-size: 13px;
  display: flex;
  div {
    flex: 1;
  }
}
//第3层
</style>
