/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
/**
 *获取用户个人资料
 *@returns promise
 */
export const swiper = () => {
  return request({
    url: 'home/swiper'

  })
}

/**
 *获取住房小组
 *@returns promise
 */
export const getghomeroups = (area) => {
  return request({
    url: 'home/groups',
    params: { area }
  })
}
