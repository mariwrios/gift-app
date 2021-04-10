import React /* { useState, useEffect } */ from "react"
import useFetchGift from "../hooks/useFetchGift"
import GifGridItem from "./GifGridItem"

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGift(category)

  return (
    <div>
      <h3>{category}</h3>
      {loading && "Loading. . ."}
      <div className="container__cards">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  )
}

export default GifGrid
