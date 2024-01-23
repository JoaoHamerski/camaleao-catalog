export const urlToFile = async (url: string, filename = '') => {
  const response = await fetch(url)
  const blob = await response.blob()
  const mimeType = 'png'

  return new File([blob], filename, { type: mimeType })
}
