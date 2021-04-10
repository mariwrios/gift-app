import React, { useState } from "react"
import PropTypes from "prop-types"

const AddCategories = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(``)

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSumbit = e => {
    e.preventDefault()
    inputValue.trim().length > 2 && setCategories(categories => [inputValue, ...categories])
  }
  return (
    <form onSubmit={handleSumbit}>
      <input placeholder="Buscar..." type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired
}
export default AddCategories
