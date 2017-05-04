export function extend (base, addon) {
  Object.keys(addon).forEach(key => {
    base[key] = addon[key]
  })
  return base
}

export function noop () {}

export function createElement (tagName, attrs) {
  var node = document.createElement(tagName)
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      node[attr] = attrs[attr]
    }
  }
  return node
}
