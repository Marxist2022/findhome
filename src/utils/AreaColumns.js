function areacolumns (area, subway) {
  area.children[0].children = [{ label: '' }]// 加空[]
  subway.children[0].children = [{ label: '' }]// 加空[]
  const areacolumns = [
    {
      label: area.label, // 区域
      children: area.children
    },
    {
      label: subway.label, // 地铁
      children: subway.children
    }
  ]
  return areacolumns
}
export default areacolumns
