import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Video = () => import('@/views/Video')
const Info = () => import('@/views/Info')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const MyPick = () => import('@/views/My/children/MyPick')
const MyRent = () => import('@/views/My/children/MyRent')
const PubHome = () => import('@/views/My/children/PubHome')
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
      { path: 'video', component: Video, name: 'video' },
      // 问答界面
      { path: 'info', component: Info, name: 'info' },
      // 我的界面
      { path: 'my', component: My, name: 'my' },
      {
        // 登录界面
        path: 'login', component: Login, name: 'login'
      },
      { path: 'mypick', component: MyPick, name: 'mypick' }
      // 主页页面
    ]
  },
  { path: '/myrent', component: MyRent, name: 'myrent' },
  { path: '/pubhome', component: PubHome, name: 'pubhome' }
]

const router = new VueRouter({
  routes
})

export default router
