import _axios from './index'
import dayjs from 'dayjs'
import { FetchOptions } from '@/interfaces/http'

export const get = (param: FetchOptions) => {
  return _axios.get(param.url, {
    params: param.query || {},
    headers: param.headers || {}
  })
}

export const post = (param: FetchOptions, config = {}) => {
  return _axios.post(param.url, param.body, config)
}

export const put = (param: FetchOptions, config = {}) => {
  return _axios.put(param.url, param.body, config)
}

export const remove = (param: FetchOptions) => {
  return _axios.delete(param.url, { data: param.body })
}

export const getForm = (params: FetchOptions) => {
  return _axios({
    url: params.url,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'get',
    params: params.query
  })
}

export function getdownload (param: FetchOptions) {
  return new Promise((resolve, reject) => {
    _axios.get(param.url, {
      params: param.query || {},
      headers: param.headers || {}
    }).then(res => {
      let fileName = dayjs().format('YYYY-MM-DD') + '.xml'
      const csvData = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=UTF-8' })
      const linkEle = document.createElement('a')
      fileName = decodeURI(res.headers['content-disposition'].split('filename=')[1]).toString()
      const url = window.URL.createObjectURL(csvData)
      linkEle.setAttribute('href', url)
      linkEle.setAttribute('download', fileName)
      linkEle.click()
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function postExport (param: FetchOptions) {
  return new Promise((resolve, reject) => {
    _axios({
      method: 'post',
      url: param.url,
      data: param.body,
      responseType: 'blob'
    }).then(res => {
      const content = res as unknown as Blob
      if (content.size === 0) {
        decodeURI(res.headers['content-disposition'].split('filename=')[1]).toString()
      }
      const blob = new Blob([content])
      const fileName = dayjs().format('YYYYMMDDhhmm') + '.xls'
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href)
      document.body.removeChild(elink)
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
