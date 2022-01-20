
import axios, { AxiosRequestConfig } from 'axios'
import { clear } from '@/storage/index'
import '../../.config.http.js'

const config = {
  timeout: 10 * 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    if (sessionStorage.token) {
      config!.headers!.token = sessionStorage.token
    }
    return config
  },
  function (error) {
    console.log('axios', error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // 流数据没有相应status、故不做判断。。。
    if (response.data.status !== 200 && response.data.status) {
      console.log('axions', response.data.message)
      return Promise.reject(response)
    } else {
      return response.data || response
    }
  },
  function (error) {
    if (error.message === '频繁切换，中断请求') {
      Promise.reject(error)
    }
    if (!error.response) {
      console.log('网络错误')
    } else if (error.response.status === 404) {
      console.log('404')
    } else if (error.response.status === 403) {
      console.log('没有权限')
      clear('token', true)
    } else {
      console.log('请求错误')
    }
    return Promise.reject(error)
  }
)

export default _axios
