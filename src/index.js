import { extend, noop, createElement } from './utils'
import './styles/style.css'

const defaultLevel = {
  children: 'children',
  checkedProperty: 'flag',
  name: 'name',
  id: 'id',
  parentId: 'parent_id',
  expened: false
}

class checkboxTree {
  constructor (node, { data = [], level = {}, changeHandler = noop }) {
    if (!node) return
    const settings = extend(defaultLevel, level)
    this.node = node
    this.data = data
    this.changeHandler = changeHandler || noop
    this.childrenSign = settings.children
    this.checkedProperty = settings.checkedProperty
    this.nameSign = settings.name
    this.idSign = settings.id
    this.parentIdSign = settings.parentId
    this.expened = settings.expened
    this.dataMap = {}
    this.selectedData = []
    this.init()
  }

  init () {
    const checkboxTree = createElement('div', { className: 'checkbox-tree' })

    checkboxTree.appendChild(this.getTreeDom(this.data))
    this.node.appendChild(checkboxTree)
    checkboxTree.addEventListener('click', this.clickHandler.bind(this))
  }

  getTreeDom (nodeData) {
    const fragment = document.createDocumentFragment()

    nodeData.forEach(value => {
      const treeNode = createElement('div', { className: 'tree-node' })

      this.dataMap[value[this.idSign]] = value

      if (value[this.childrenSign] && value[this.childrenSign].length) {
        this.checkAndInterminate = [false, false]

        const status = this.getStatus(value[this.childrenSign])
        const contentProp = {
          text: value[this.nameSign],
          id: value[this.idSign],
          checked: status[0],
          fill: true,
          indeterminate: status[1]
        }

        treeNode.appendChild(this.getTreeNodeContent(contentProp))
        treeNode.appendChild(this.getTreeNodeChild(this.getTreeDom(value[this.childrenSign])))
      } else {
        const contentProp = {
          text: value[this.nameSign],
          id: value[this.idSign],
          checked: value[this.checkedProperty],
          fill: false,
          indeterminate: false
        }

        treeNode.appendChild(this.getTreeNodeContent(contentProp))
      }

      fragment.appendChild(treeNode)
    }, this)

    return fragment
  }

  getTreeNodeContent ({ text, id, checked, fill, indeterminate }) {
    const emptySign = fill ? '' : 'empty'
    const expened = this.expened ? 'expened' : ''
    const node = createElement('div', { className: 'tree-node-content' })

    node.appendChild(createElement('span', { className: `tree-icon ${emptySign} ${expened}` }))
    node.appendChild(createElement('input', { type: 'checkbox', name: id, checked, indeterminate }))
    node.appendChild(createElement('span', { className: 'tree-text', innerHTML: text }))

    return node
  }

  getStatus (children) {
    this.getCheckAndInterminate(children)
    let result = []

    if (this.checkAndInterminate[0] && this.checkAndInterminate[1]) {
      result = [false, true]
    } else if (this.checkAndInterminate[0] && !this.checkAndInterminate[1]) {
      result = [true, false]
    } else {
      result = [false, false]
    }

    return result
  }

  getCheckAndInterminate (children) {
    children.forEach(child => {
      if (child[this.childrenSign] && child[this.childrenSign].length) {
        this.getCheckAndInterminate(child[this.childrenSign])
      } else {
        if (child[this.checkedProperty]) {
          this.checkAndInterminate[0] = true
        } else {
          this.checkAndInterminate[1] = true
        }
      }
    }, this)
  }

  getTreeNodeChild (content) {
    const expened = this.expened ? 'expened' : ''
    const node = createElement('div', { className: `tree-node-child ${expened}` })

    node.appendChild(content)

    return node
  }

  clickHandler ({ target }) {
    if (target.tagName.toLowerCase() === 'span') {
      const clickChildrenDom = target.parentNode.nextSibling

      if (!clickChildrenDom) return
      if (clickChildrenDom.classList.contains('expened')) {
        clickChildrenDom.classList.remove('expened')
        target.classList.remove('expened')
      } else {
        clickChildrenDom.classList.add('expened')
        target.classList.add('expened')
      }
    } else if (target.tagName.toLowerCase() === 'input') {
      this.checkboxClickHandler(target)
      this.changeHandler()
    }
  }

  getSelectedNodes (leafNodeOnly, exceptIndeterminate) {
    const input = this.node.querySelectorAll('input')
    const selectedData = []

    input.forEach(item => {
      if (leafNodeOnly) {
        if (item.checked && !item.parentNode.nextSibling) {
          selectedData.push(this.dataMap[item.name])
        }
      } else {
        if (exceptIndeterminate) {
          if (item.checked && !item.indeterminate) {
            selectedData.push(this.dataMap[item.name])
          }
        } else {
          if (item.checked || item.indeterminate) {
            selectedData.push(this.dataMap[item.name])
          }
        }
      }
    }, this)

    return selectedData
  }

  changeData (data) {
    this.data = data
    this.destory()
    this.init()
  }

  destory () {
    this.node.innerHTML = null
    this.node.removeEventListener('click', this.clickHandler.bind(this))
  }

  checkboxClickHandler (target) {
    const clickChildrenDom = target.parentNode.nextSibling
    const parentDom = target.parentNode.parentNode.parentNode

    if (target.checked === true) {
      // 自身被选中
      this.dataMap[target.name][this.checkedProperty] = true

      if (clickChildrenDom) {
        // 子元素全部选中
        clickChildrenDom.querySelectorAll('input').forEach(value => {
          value.checked = true
          this.dataMap[value.name][this.checkedProperty] = true
        }, this)
      }
      // 处理父元素逻辑
      this.parentChangeHandler(parentDom, true, false)
    } else {
      // 自身被移除
      this.dataMap[target.name][this.checkedProperty] = false

      if (clickChildrenDom) {
        // 子元素全部移除
        clickChildrenDom.querySelectorAll('input').forEach(value => {
          value.indeterminate = false
          value.checked = false
          this.dataMap[value.name][this.checkedProperty] = false
        }, this)
      }
      // 处理父元素逻辑
      this.parentChangeHandler(parentDom, false, false)
    }
  }

  parentChangeHandler (parentDom, checked, childIndeterminate) {
    if (!parentDom.previousSibling) return

    const parentInput = parentDom.previousSibling.querySelector('input')
    // 默认无半选状态
    let indeterminate = false
    const parentDomChildren = Array.prototype.slice.call(parentDom.children)

    if (checked) {
      // 元素自身被选中， 检查兄弟节点是否全选
      parentDomChildren.some(child => {
        const childInput = child.querySelectorAll('input')
        const inputArray = Array.prototype.slice.call(childInput)
        const indStatus = inputArray.some(value => !value.checked)
        if (indStatus) {
          indeterminate = true
          return true
        }
      })
      // 赋值状态
      parentInput.checked = true
      parentInput.indeterminate = childIndeterminate || indeterminate

      if (!parentInput.indeterminate) {
        this.dataMap[parentInput.name][this.checkedProperty] = true
      }
    } else {
      // 元素自身被移除， 检查兄弟节点是否全选
      parentDomChildren.some(child => {
        const sibingInput = child.children[0].querySelectorAll('input')[0]
        if (sibingInput.checked || sibingInput.indeterminate) {
          // 如果有被选中的，则半选状态并跳出循环
          indeterminate = true
          return true
        }
      })
      // 赋值状态
      parentInput.checked = indeterminate
      parentInput.indeterminate = childIndeterminate || indeterminate

      this.dataMap[parentInput.name][this.checkedProperty] = indeterminate
    }

    if (parentDom.parentNode.parentNode.classList.contains('tree-node-child')) {
      // 递归父节点
      this.parentChangeHandler(parentDom.parentNode.parentNode, checked, indeterminate)
    }
  }
}

export default checkboxTree
