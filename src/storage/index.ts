// const storage = window.localStorage
const storage = window.sessionStorage

export function save (key: string, value: string) {
  storage.setItem(key, value)
}

export function read (key:string) {
  return storage.getItem(key)
}

export function clear (key: string, clearAll = false) {
  if (clearAll) {
    storage.clear()
  } else {
    storage.removeItem(key)
  }
}
