import React /* { useState, useEffect } */ from "react"
import useFetchGift from "../hooks/useFetchGift"
import PropTypes from "prop-types"

import GifGridItem from "./GifGridItem"

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGift(category)

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p>Loading. . .</p>}
      <div className="container__cards">
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
