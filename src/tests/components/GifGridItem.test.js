import React from "react"
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"

const title = "Soy un titulo"
const url = "https://localhost/ejemplo.com"
const wrapper = shallow(<GifGridItem title={title} url={url} />)

describe("Probando el componete <GifGridItem/>", () => {
  test("Renderiza correctamente el componente <GifGridItem/>", () => {
    expect(wrapper).toMatchSnapshot()
  })
  test("Probando que lleguen los argumentos a los lugares correctos", () => {
    const p = wrapper.find("p")
    expect(p.text().trim()).toBe(title)

    const { src, alt } = wrapper.find("img").props()

    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test("Debe tener la clase de css animate__fadeIn", () => {
    const div = wrapper.find("div").prop("className")
    //En el siguiente codigo se muestra mi solucion al ejercicio.
    //const arr = div.split(" ")
    //expect("animate__fadeIn").toBe(arr[2].toString())
    //---------------------------------------------
    // A continuacion la solucion del profesor
    expect(div.includes("animate__fadeIn")).toBe(true)

    //arriba dice, que si el texto incluye animate__fadeIn entonces es verdadero.
  })
})
