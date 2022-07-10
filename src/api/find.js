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
/**
 *获取房屋相关的一些信息
 *@returns
 */
export const getHouseInfo = (params) => {
  return request({
    url: '/houses',
    params: {
      // cityId, // 地区的id//
      // area, // 地区
      // subway, // 地铁
      // rentType, // 整租
      // price, // 价格
      // more, // 复合查询
      // roomType, // 房屋类型
      // oriented, // 朝向
      // characteristic, // 标签
      // floor, // 楼层
      // start, // 开始项
      // end// 结束项
    }
  })
}
