import { FC } from 'react'
import Node from './node'
import { typeOf } from './utils'

export interface JsonProps {
  data: any
}

const setChildNode = (data: JsonProps['data']) => {
  let node
  switch (typeOf(data)) {
    case 'array':
      node = data.map((d, i) => <Node data={d} key={i} />)
      break
    case 'object':
      node = Object.keys(data).map((k, i) => <Node data={data[k]} k={k} key={i} />)
      break
    default:
      node = <span>数据格式错误</span>
  }
  return node
}

const Json: FC<JsonProps> = ({ data }) => {
  console.log(data)
  return (
    <ul className='json-wrap'>
      {
        !data
          ? '暂无数据'
          : setChildNode(data)
      }
    </ul>
  )
}

export default Json
