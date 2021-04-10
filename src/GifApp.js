import React, { useState } from "react"
import AddCategories from "./components/AddCategories"
import GifGrid from "./components/GiftGrid"

const GifApp = () => {
  const [categories, setCategories] = useState(["Sakura Card Captor"])

  /*const handleAdd = () => {
    setCategories([...categories, "Inuyasha"])
  }*/

  return (
    <>
      <h2>GifApp</h2>
      <AddCategories setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  )
}

export default GifApp
