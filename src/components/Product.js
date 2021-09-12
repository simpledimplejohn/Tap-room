import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap"

export default function Product(props) {
  const prod = { name: props.name, description: props.description, quantity: props.quantity, id: props.id }

  let subtract = "Subtract 1"
  if (prod.quantity === 0) {
    subtract = "Out of Stock"
  }

  return (
    <React.Fragment>
      <p><strong>****Shows Product Details, subtract button, Product.js***</strong></p>
      <div onClick={() => props.whenProductClicked(props.id)}>
        <p>{props.name}</p>
        <p>
          {props.description}
        </p>
        <ul>
          <li>Quantity: {props.quantity}</li>
          <li>ID: {props.id}</li>
        </ul>
        <p><strong>****add and subtract buttons here:***</strong></p>
        <Button
          type="submit" onClick={() => props.stockPlus(prod)}>
          Add 1 **in Product.js**
        </Button>
        
        <Button
          type="submit" onClick={() => props.stockMinus(prod)}>
          {subtract}
        </Button>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  stockPlus: PropTypes.func
}

