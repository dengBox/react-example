import { FC } from 'react'
import { typeOf } from './utils'

interface NodeProps {
  data: any,
  k?: string
}

const Node: FC<NodeProps> = ({ data, k }) => {
  console.log(k, data, typeOf(data))
  return (
    <li className='node'>{

    }</li>
  )
}

export default Node
