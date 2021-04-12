import React from "react"
import "@testing-library/jest-dom"
import { shallow } from "enzyme"
import AddCategories from "../../components/AddCategories"

describe("Probando el componente AddCategories", () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategories setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategories setCategories={setCategories} />)
  })
  test("Debe mostrarse correctamente <AddCategories/>", () => {
    expect(wrapper).toMatchSnapshot()
  })

  test("Debe cambiarse el contenido del input correctamente", () => {
    const input = wrapper.find("input")
    const value = "Hola Mundo"
    input.simulate("change", { target: { value } })
  })

  test("No debe activarse el onSumbit si no se le envia nada", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} })

    expect(setCategories).not.toHaveBeenCalled()
  })
  test("Debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Naruto"
    const inputValue = wrapper.find("input").prop("value")

    wrapper.find("input").simulate("change", { target: { value } })

    wrapper.find("form").simulate("submit", { preventDefault() {} })

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    //aqui verificamos que se llamara la menos una vez y que recibio una funion
    expect(inputValue).toBe("")
  })
})
