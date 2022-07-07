<template>
  <div class="find-container">
    <!-- //2搜索框 -->
    <van-search
      v-model="search_value"
      placeholder="请输入小区或地址"
      show-action
    >
      <!-- 左侧箭头 -->
      <i slot="left"> <van-icon name="arrow-left" @click="$router.back()" /></i>
      <!-- 右侧地图 -->
      <i slot="action"><van-icon name="aim" /> </i>
      <!-- 地址 -->
      <i slot="label" @click="$router.push('/citylist')"
        >{{ local_place }}
        <!-- 小箭头图标 -->
        <svg
          t="1656938320013"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2866"
          width="12"
          height="12"
        >
          <path
            d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z"
            p-id="2867"
            fill="#8a8a8a"
          ></path></svg
      ></i>
    </van-search>
    <!-- //2搜索框 -->
    <!-- 下拉菜单 ++++++++++++++++++++++-->
    <van-dropdown-menu active-color="#21b97a">
      <!-- 区域 -->
      <van-dropdown-item title="区域" ref="item">
        <div slot="default">
          <van-picker
            value-key="label"
            show-toolbar
            title="hah "
            :columns="columns"
          />
        </div>
      </van-dropdown-item>
      <!-- 方式 -->
      <van-dropdown-item title="方式" ref="item">
        <div slot="default">
          <van-area title="标题" :area-list="areaList" :columns-num="2" /></div
      ></van-dropdown-item>
      <!-- 租金 -->
      <van-dropdown-item title="租金" ref="item"
        ><div slot="default">
          <van-area title="标题" :area-list="areaList" :columns-num="2" />
        </div>
      </van-dropdown-item>
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" ref="item"> </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 下拉菜单 *************************-->
  </div>
</template>

<script>

import { getHousesCondition } from '@/api/find'
export default {
  name: 'videoIndex',
  created () {
    this.getHousesCondition()
  },
  data () {
    return {
      local_place: this.$store.state.findCity.name,
      local_id: this.$store.state.findCity.id,
      search_value: '', // 搜索框内容
      // 下拉裤
      areaList: {},
      sonCity: [], // 子城市,
      columns: [], // 处理后的值
      o: []

    }
  },
  methods: {

    onConfirm () {
      this.$refs.item.toggle()
    },
    async getHousesCondition () {
      try {
        const res = await getHousesCondition(this.$store.state.findCity.id)// 获取数据
        console.log('tiaojian', res)
        const area = res.data.body.area// 区域
        const subway = res.data.body.subway// 地铁
        console.log('区域', area)
        console.log('地铁', subway)
        area.children[0].children = []// 加空[]
        subway.children[0].children = []// 加空[]
        this.columns = [
          {
            label: area.label, // 区域
            children: area.children
          },
          {
            label: subway.label, // 地铁
            children: subway.children
          }
        ]
        // 处理数据
      } catch (error) {
        console.log(error)
      }
    }

  },
  computed: {

  },
  watch: {},
  filters: {},
  components: {},
  mounted () {

  }
}
</script>

<style scoped lang='less'>
.find-container {
  .van-search,
  .van-search--show-action {
    background-color: #21b97a;
  }
}
</style>
