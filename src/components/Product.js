import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap"

export default function Product(props) {
  const prod = { name: props.name, brand: props.brand, flavor: props.flavor, price: props.price, quantity: props.quantity, id: props.id }

  let subtract = "Subtract 1 drink"
  if (prod.quantity === 0) {
    subtract = "Out of Stock"
  }

  return (
    <React.Fragment>
      <div onClick={() => props.whenProductClicked(props.id)}>
        <hr/>
        <p><strong>Kumbucha</strong></p>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Brand:</strong> {props.brand}</p>
        <p><strong>Flavor:</strong> {props.flavor}</p>
        <p><strong>Price:</strong> {props.price}</p>
        <p><strong>Drinks Left: </strong> {props.quantity}</p>
        </div>
        
        {/* <Button
          type="submit" onClick={() => props.stockPlus(prod)}>
          Add 1 keg
        </Button> */}
        
        <Button
          type="submit" onClick={() => props.stockMinus(prod)}>
          {subtract}
        </Button>
      
      <hr/>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  stockPlus: PropTypes.func
}

