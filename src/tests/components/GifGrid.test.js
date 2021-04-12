import React from "react"
import { shallow } from "enzyme"
import GifGrid from "../../components/GiftGrid"
import "@testing-library/jest-dom"
import useFetchGif from "../../hooks/useFetchGift"
jest.mock("../../hooks/useFetchGift.js")
// Arriba se usa un mock que nos ayudara a simular o recrear
// los comportamientos de nuestro useFetchGif

describe("Probando el componente <GifGrid/>", () => {
  test("Debe mostrar correctamente <GifGrid/>", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={"Hola mundo"} />)
    expect(wrapper).toMatchSnapshot()
  })

  test("Debe mostrar items cuando se cargan imagenes con el useFetchGift", () => {})
  const gif = [
    {
      id: "ABC",
      url: "http://loquesea.com.jpg",
      title: "Soy cualquier Titulo"
    },
    {
      id: "123",
      url: "http://loquesea.com.jpg",
      title: "Soy cualquier Titulo x2"
    }
  ]

  useFetchGif.mockReturnValue({
    data: gif,
    loading: false
  })
  const wrapper = shallow(<GifGrid category={"Hola mundo"} />)
  // expect(wrapper).toMatchSnapshot()
  // con el snapshop comparamos en el archivo si cambia o no
  // el componente al recibir data.
  const p = wrapper.find("p").exists() // aqui averiguamos si existe el parrafo que debe
  // aparecer o no segun la condicion.
  expect(p).toBe(false)

  // ahora comprobaremos si se muestre el <GifGridItem/> al ser false el parrafo

  expect(wrapper.find("GifGridItem").length).toBe(gif.length)
})
