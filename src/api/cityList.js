import request from '@/utils/request'
/**
 *获取城市列表数据
 *@returns
 */
export const getAllCityList = (level) => {
  return request({
    url: '/area/city',
    params: { level }

  })
}
/**
 *热门城市 不用传值
 *@returns
 */
export const gethotCityList = () => {
  return request({
    url: '/area/hot'
  })
}
