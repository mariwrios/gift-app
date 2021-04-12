import useFetchGift from "../../hooks/useFetchGift"
import { renderHook } from "@testing-library/react-hooks"
describe("Probando el useFetchGif", () => {
  test("Debe retornar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGift("Naruto"))

    const { data, loading } = result.current
    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
  test("Debe retornar un [] de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGift("Naruto"))

    await waitForNextUpdate()
    const { data, loading } = result.current

    expect(data.length).toBe(15)
    expect(loading).toBe(false)
  })
})
