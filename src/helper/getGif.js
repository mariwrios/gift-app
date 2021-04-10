export const getGif = async category => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=iG2ZzbLSGUbkJjOp1d6U582vDPDJUqpT&q=${category}&limit=12`

  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images.downsized_medium.url
    }
  })
  return gifs
}
