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
    user: {},
    findCity: {
      name: '北京',
      id: 'AREA|88cff55c-aaa4-e2e0'
    }

  },
  getters: {
  },
  mutations: {
    // 添加数据到后台
    setUser (state, payload) {
      state.user = payload
    },
    setCityname (state, cityname) {
      state.findCity.name = cityname
    },
    setCityid (state, cityid) {
      state.findCity.id = cityid
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]

})
