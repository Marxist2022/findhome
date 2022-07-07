
function transferData (oldArr, newArr) { // jsonList就是后端返回的json数组
  for (let i = 1; i < oldArr.length; i++) { // 循环遍历后端返回的jsonList中的每个json数据
    const midList = { label: '', children: [] } // 构造一个空的TreeNode数据，此句必须放在循环体里
    newArr.push(midList)
    if (oldArr[i].children.length > 0) { // 如果jsonList有下一层
      this.transferData(oldArr[i].children, newArr[i].children) // 递归找到下一层的json
    }
    newArr[i].label = oldArr[i].label // 取出部门名字，根据需要也可以把部门id等信息取出
  }
}
export default transferData
