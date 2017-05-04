import Tree from '../src/index'
import data from './data'
import data1 from './data1'

const level = {
  children: 'children',
  checkedProperty: 'flag',
  name: 'name',
  id: 'id',
  parentId: 'parent_id'
}
let sign = true
/* eslint-disable no-new */
const tree = new Tree(document.getElementById('tree'), {
  data: data['children'],
  level: level
})
const getBtn = document.querySelector('#get-info')
const checkType = document.querySelector('#check-type')

getBtn.addEventListener('click', () => {
  const [leafNodeOnly, exceptIndeterminate] = checkType.value.split(',')

  console.log(tree.getSelectedNodes(!!+leafNodeOnly, !!+exceptIndeterminate))
})

const toggleBtn = document.querySelector('.toggle-data')
toggleBtn.addEventListener('click', () => {
  sign = !sign
  const dataNow = sign ? data['children'] : data1['children']
  tree.changeData(dataNow)
})
