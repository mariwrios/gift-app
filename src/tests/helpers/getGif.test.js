import { getGif } from "../../helper/getGif"

describe("Probando el fetch en getGif", () => {
  test("Prbando que traiga 12 elementos", async () => {
    const get = await getGif("Naruto")
    expect(get.length).toBe(15)
  })
  test("Prbando que no llegue nada si no se le envia category", async () => {
    const get = await getGif(" ")
    expect(get.length).toBe(0)
  })
})
