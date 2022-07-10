/**
 * 用户相关的请求模块
 */
import store from '@/store'
import request from '@/utils/request'
/**
   * 发布房源
   */
export const publishHouses = body => {
  return request({
    method: 'POST',
    url: '/user/houses',
    params: {
      authorization: store.state.user.token,
      body
    }
  })
}
