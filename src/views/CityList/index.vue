<template>
  <div class="CityList-container">
    <!-- 顶部导航栏 -->
    <TopNav title="城市列表"></TopNav>
    <!-- 城市列表 -->
    <!-- //4  -->
    <van-index-bar :index-list="indexList" class="cityList">
      <!-- 当前城市 -->
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell
        :title="$store.state.findCity.cityname"
        @click="$router.back()"
      />
      <!-- /当前城市 -->
      <!-- 热门城市 -->
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="hot.label"
        v-for="(hot, hotindex) in hotCity"
        :key="hotindex"
        @click="onclick(hot.label, hot.value)"
      />
      <!-- /热门城市 -->
      <!-- 常规城市 -->
      <div v-for="(adc, adcindex) in capital" :key="adcindex">
        <!-- ABC索引值 -->
        <van-index-anchor :index="adc">{{ adc }}</van-index-anchor>
        <!-- 首字母对应的城市 -->
        <van-cell
          v-for="(cityName, cityindex) in CityList[adc]"
          :title="cityName.label"
          :key="cityindex"
          @click="onclick(cityName.label, cityName.value)"
        />
      </div>
      <!-- /常规城市 -->
    </van-index-bar>
    <!-- //4  -->
  </div>
</template>

<script>
import _ from 'lodash'

import { getAllCityList, gethotCityList } from '@/api/cityList'
export default {
  name: 'CityList',
  async created () {
    this.getCityList()// 获取所有城市
  },
  computed: {},

  data () {
    return {
      CityList: [], // 城市列表
      hotCity: [], // 热门城市
      capital: [], // 首字母
      indexList: ['#', '热'] // 列表侧边篮

    }
  },
  methods: {
    onclick (cityName, value) {
      this.$store.commit('setCityname', cityName)// 发送地名
      this.$store.commit('setCityid', value)// 发送id
      this.$router.back()
    },

    // 2 获取全部城市
    async getCityList () {
      try {
        // 3获取热门城市列表-------------------------------------------
        const hotres = await gethotCityList()
        this.hotCity = hotres.data.body
        console.log('热门城市列表this.hotCity', this.hotCity)// 1热门城市列表
        // 3获取全部城市列表-------------------------------------------
        const allres = await getAllCityList(1)// 请求获取全部城市
        const chaosList = allres.data.body// 将请求回来的数据中全部城市保存
        console.log('凌乱的列表chaosList', chaosList)// 2.1凌乱所有城市列表
        // 3首字母排列城市列表-------------------------------------------
        const ok = _.orderBy(chaosList, ['short'], ['asc'])// 按照首字母排序
        console.log('排序好的列表ok', ok)
        // 3城市按首字母分类-------------------------------------------
        const midList = []// 中继数组存放分类好的列表
        ok.forEach((cityName) => {
          // 如果城市首字母在新数组中存在就在 对应的字母中添加城市
          if (midList[cityName.short[0]]) {
            midList[cityName.short[0]].push(cityName)
          } else { // 反之如果没有就在数组中创建一个首字母数组
            midList[cityName.short[0]] = [cityName]
          }
        })
        // console.log('CityList', midList)// 按照城市首字母分类好数组
        this.CityList = midList// 城市按照首字母分类好的列表
        console.log('分类好的列表this.CityList', this.CityList)
        // 3获取首字母-------------------------------------------
        // 获取首字母排列
        for (const i in midList) {
          this.capital.push(i)
        }
        console.log('首字母排列数组 this.capital', this.capital)// 打印首字母排列数组
        this.indexList.push(...this.capital)//
        // 3获取首字母------------------------------- --------------------------------
        // this.CityList.unshift(this.hotCity)
        console.log(this.CityList)
      } catch (error) {
        console.log(error)
      }
    }
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.cityList {
  padding-top: 45px;
}
</style>
