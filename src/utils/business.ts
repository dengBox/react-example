
export const download = (url: string | Blob, fileName: string) => {
  const elink = document.createElement('a')
  elink.download = fileName
  elink.style.display = 'none'
  elink.href = typeof url === 'string' ? url : URL.createObjectURL(url)
  document.body.appendChild(elink)
  elink.click()
  URL.revokeObjectURL(elink.href)
  document.body.removeChild(elink)
}
