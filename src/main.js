import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
// 加载Vant全局样式
import Vant, { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
// 引入rem适配
import '@/styles/reset.less'
import '@/components/index'
// import '@/styles/iconfont.less'
Vue.config.productionTip = false
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
