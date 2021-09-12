import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"

export default function Product(props) {
  const prod = { name: props.name, description: props.description, quantity: props.quantity, id: props.id }

  let subtract = "Subtract 1"
  if (prod.quantity === 0) {
    subtract = "Out of Stock"
  }

  return (
    <React.Fragment>
      <p><strong>****Shows Product Details, subtract button, Product.js***</strong></p>
      <div className="col-6 mb-3">
        <Card>
          <Card.Body>
            <Card.Title onClick={() => props.whenProductClicked(props.id)}>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <ul>
              <li>Quantity: {props.quantity}</li>
              <li>ID: {props.id}</li>
            </ul>
            <p><strong>****add and subtract buttons here:***</strong></p>
            <Button
              type="submit"
              variant="success"
              className="m-3"
              onClick={() => props.stockPlus(prod)}
            >
              Add 1 **in Product.js**
            </Button>
            
            <Button
              type="submit"
              variant="warning"
              className="m-3"
              onClick={() => props.stockMinus(prod)}
            >
              {subtract}
            </Button>

          </Card.Body>
        </Card>
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

