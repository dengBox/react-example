export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface FetchOptions {
  url: string
  method: Method
  showErrorMsg?: boolean
  payload: any
  headers?: any
}

export type URLFormat = [string, Record<string, any>]
