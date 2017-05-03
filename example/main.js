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
new Tree(document.getElementById('tree'), {
  data: data['children'],
  level: level
})
const getBtn = document.querySelector('.get-info')
getBtn.addEventListener('click', ({ target }) => {
  const { a, b } = target.dataset
  console.log(Tree.getSelectedNodes(a, b))
})
const toggleBtn = document.querySelector('.toggle-data')
toggleBtn.addEventListener('click', () => {
  sign = !sign
  const dataNow = sign ? data['children'] : data1['children']
  console.log(dataNow)
  Tree.changeData(dataNow)
})
