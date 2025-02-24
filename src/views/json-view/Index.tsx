/* eslint-disable */
import Json from '@/components/json-view/Index'
import { FC } from 'react'

const json = {
  "status": 200,
  "message": "成功",
  "timestamp": 1671093456424,
  "data": {
    "loginInfo": {
      "loginTime": "2022-12-05 17:33:42",
      "loginIp": "124.116.189.34"
    },
    "passwordInfo": {
      "day": 0
    }
  }
}

const JsonView: FC = () => {
  return (
    <div className="json-view">
      <Json data={json} />
    </div>
  )
}

export default JsonView
