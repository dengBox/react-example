export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface FetchOptions {
  url: string
  query?: boolean
  body?: any
  headers?: any
}

export type URLFormat = [string, Record<string, any>]
