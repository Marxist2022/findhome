import request from '@/utils/request'
/**
 *获取子级城市列表
 *@returns
 */
export const getSonCtiyList = (id) => {
  return request({
    url: '/area',
    params: {
      id: id
    }
  })
}
/**
 *获取房屋查询条件
 *@returns
 */
export const getHousesCondition = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id: id
    }
  })
}
