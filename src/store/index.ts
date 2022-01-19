/* eslint-disable import/no-mutable-exports */
const context = require.context('./', true, /.js$/)
let routerList:Array<object> = []

context.keys().forEach(k => {
  const lastname = k.substring(k.lastIndexOf('.'), k.length)
  if (k !== './index.ts' && lastname === 'ts') {
    routerList = [...routerList, ...context(k).default]
  }
})

export default routerList
