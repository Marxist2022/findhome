import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  // 指定用的是储存方式是本地储蓄
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: JSON.parse(window.localStorage.getItem('itemID')),
    user: {},
    findCity: {
      cityname: '北京', // 地区名字
      cityId: 'AREA|88cff55c-aaa4-e2e0' // 地区的id/
    },
    findCityInfo: {
      cityId: '', // 地区的id/
      area: '', // 地区
      subway: '', // 地铁
      rentType: '', // 整租
      price: '', // 价格
      more: '', // 复合查询
      roomType: '', // 房屋类型
      oriented: '', // 朝向
      characteristic: '', // 标签
      floor: '', // 楼层
      start: '', // 开始项
      end: ''// 结束项
    }

  },
  getters: {
  },
  mutations: {
    // 添加数据到后台
    setUser (state, payload) {
      state.user = payload
    },

    // 城市列表 添加城市名字
    setCityname (state, cityname) {
      state.findCity.cityname = cityname
    },
    // 城市列表 添加搜索城市信息
    setCityid (state, cityId) {
      state.findCity.cityId = cityId
    },
    // 找房 添加搜索城市星系
    setCityInfo (state, findInfo) {
      state.findCityInfo = findInfo
    },
    setItemId (state, id) {
      state.item = id
      window.localStorage.setItem('itemID', JSON.stringify(id))
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]

})
