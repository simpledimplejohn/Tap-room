import React from "react";
import PropTypes from "prop-types";



export default function Total(props) {
  const { items } = props

  let totalCartItems = 0
  items.forEach((item) => {
    totalCartItems += item.quantity 
  })
  
  console.log(items)
  return (
    <React.Fragment>
        <p>Total Kegs: {totalCartItems}</p>
        <hr/>
    </React.Fragment>
  )
}
