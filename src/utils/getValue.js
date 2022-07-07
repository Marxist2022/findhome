function getID (oldArr, id) {
  let o = {}
  oldArr.forEach(function (item) {
    if (item.id === id) {
      o = item
      return o
      // 2. 我们想要得里层的数据 11 12 可以利用递归函数
    } else if (item.goods && item.goods.length > 0) {
      o = getID(item.goods, id)
    }
  })
  return o
}
export default getID
