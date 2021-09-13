import React from "react";
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group
          controlId="productName">
          <Form.Label>Kombucha Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            defaultValue={props.prodBool ? props.product.name : ""}>
          </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="productBrand">
          <Form.Label>Kombucha Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            defaultValue={props.prodBool ? props.product.brand : ""}
            required />
        </Form.Group>
        <Form.Group
          controlId="productFlavor">
          <Form.Label>Kombucha Flavor</Form.Label>
          <Form.Control
            type="text"
            name="flavor"
            defaultValue={props.prodBool ? props.product.flavor : ""}
            required />
        </Form.Group>
        <Form.Group
          controlId="productFlavor">
          <Form.Label>Keg Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            defaultValue={props.prodBool ? props.product.price : ""}
            required />
        </Form.Group>

        <Button
          type="submit">
          {props.formButtonText} 
        </Button>
      </Form>
    </React.Fragment>
  )
}


ReusableForm.propTypes = {
  onNewProductCreation: PropTypes.func, //inherited from parent. Function from controller handleaddingnewproducttolist
  button: PropTypes.string
}

export default ReusableForm