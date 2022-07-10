import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Find = () => import('@/views/Find')
const Info = () => import('@/views/Info')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const MyPick = () => import('@/views/My/MyPick')
const MyRent = () => import('@/views/My/MyRent')
const Publich = () => import('@/views/Publich')
const CityList = () => import('@/views/CityList')
const MapFind = () => import('@/views/MapFind')
const Item = () => import('@/views/Item')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    // 重定向
    redirect: '/home',
    children: [
      { path: 'home', component: Home, name: 'home' },
      // 主页页面
      { path: 'find', component: Find, name: 'find' },
      // 问答界面
      { path: 'info', component: Info, name: 'info' },
      // 我的界面
      { path: 'my', component: My, name: 'my' },
      {
        // 登录界面
        path: 'login', component: Login, name: 'login'
      }
    ]
  },
  { path: '/mypick', component: MyPick, name: 'mypick' }, // 我的收藏
  { path: '/myrent', component: MyRent, name: 'myrent' }, // 我的出租
  { path: '/pubhome', component: Publich, name: 'pubhome' }, // 发布房源列表
  { path: '/citylist', component: CityList, name: 'citylist' }, // 城市列表
  { path: '/mapfind', component: MapFind, name: 'mapfind' }, // 地图找房
  { path: '/item', component: Item, name: 'item' }// 地图找房
]

const router = new VueRouter({
  routes
})

export default router
