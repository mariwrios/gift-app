import React from "react"
import { shallow } from "enzyme"
import GifApp from "../GifApp"

describe("Probando <GifApp/>", () => {
  test("Que se muestre correctamente <GifApp/>", () => {
    const wrapper = shallow(<GifApp />)
    expect(wrapper).toMatchSnapshot()
  })
  test("Debe de mostrar tantas <GifGridItems/> como categorias tenga", () => {
    const categories = ["inuyasha", "naruto", "SNK"]
    const wrapper = shallow(<GifApp defaultCategories={categories} />)
    expect(wrapper.find("GifGrid").length).toBe(categories.length)
  })
})
