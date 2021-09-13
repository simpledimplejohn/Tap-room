import React from "react";
import PropTypes from "prop-types";



export default function Cart(props) {
  const { items } = props

  let totalCartItems = 0
  items.forEach((item) => {
    totalCartItems += item.quantity 
  })
  
  console.log(items)
  return (
    <React.Fragment>
        <p>Items in Cart: {totalCartItems}</p>
        <hr/>
    </React.Fragment>
  )
}
