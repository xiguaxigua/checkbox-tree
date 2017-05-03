export default {
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
