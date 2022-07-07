function getLabel (oldArr) {
  const o = []
  oldArr.children.forEach(item => o.push({ text: item.label }))
  console.log(o)
  return o
}
export default getLabel
