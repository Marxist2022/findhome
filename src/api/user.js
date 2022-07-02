/**
 * 用户相关的请求模块
 */
import store from '@/store'
import request from '@/utils/request'
/**
  * 用户登录
  */
export const login = data => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
/**
 *获取用户个人资料
 *@returns promise
 */
export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      // Authorization: 'Bearer ' + store.state.user.token
      Authorization: store.state.user.token
    }
  })
}
