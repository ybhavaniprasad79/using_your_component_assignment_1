// write the book component code here
import React from 'react'
import App from '../App'

function Bookcard({id,image,name,genre,author}) {
  return (
    <div className="product-card">
      <h2>{id}</h2>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h2>{genre}</h2>
      <h2>{author}</h2>
      
    </div>
  )
}

export default Bookcard

