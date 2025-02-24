const tostring = Object.prototype.toString

export function isNull (val: any): Boolean {
  return tostring.call(val) === '[object Null]'
}

export function isArray (val: any): Boolean {
  return tostring.call(val) === '[object Array]'
}

export function isObject (val: any): Boolean {
  return tostring.call(val) === '[object Object]'
}

export function typeOf (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}
