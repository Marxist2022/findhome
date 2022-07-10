import request from '@/utils/request'
/**
 *查询房屋具体信息
 *@returns promise
 */
export const getHouseDetail = (id) => {
  return request({
    url: `houses/${id}`
  })
}
