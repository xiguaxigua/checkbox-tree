### CheckBox-Tree 展示树状结构的组件

#### 开始使用

`npm i checkbox-tree`

```js
const level = {
  children: 'children',
  checkedProperty: 'flag',
  name: 'name',
  id: 'id',
  parentId: 'parent_id',
  expened: false
}

const data = {
  id: 0,
  name: 'company',
  parent_id: '0',
  flag: true,
  children: [{
    id: 1,
    name: 'level1-1',
    parent_id: 0,
    flag: false,
    children: [{
      id: 2,
      name: 'level2-1',
      parent_id: 1,
      flag: true,
      children: [{
        id: 10,
        name: 'level3-1',
        parent_id: 2,
        flag: false,
        children: []
      }, {
        id: 11,
        name: 'level3-2',
        parent_id: 2,
        flag: true,
        children: []
      }]
    }, {
      id: 5,
      name: 'level2-2',
      parent_id: 1,
      flag: true,
      children: []
    }, {
      id: 6,
      name: 'level2-3',
      parent_id: 1,
      flag: true,
      children: []
    }]
  }, {
    id: 3,
    name: 'level1-2',
    parent_id: 0,
    flag: true,
    children: [{
      id: 4,
      name: 'level2-4',
      parent_id: 3,
      flag: true,
      children: []
    }]
  }]
}

const tree = new Tree(document.getElementById('tree'), {
  data: data['children'],
  level
})

// get selected node

tree.getSelectedNodes(leafNodeOnly, exceptIndeterminate) // 是否只要叶子节点，是否获取半选节点
```

#### 配置项

`level` 用于配置属性名称及是否默认展开
```js
{
  children: 'children', // 子节点属性
  checkedProperty: 'flag', // 选中属性
  name: 'name', // 节点名称属性
  id: 'id', // 节点id属性
  parentId: 'parent_id', // 父节点id属性
  expened: false // 是否默认展开整棵树
}
```


