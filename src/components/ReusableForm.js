import React from "react";
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group
          className="mb-3"
          controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            defaultValue={props.prodBool ? props.product.name : ""}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="productDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            defaultValue={props.prodBool ? props.product.description : ""}
            required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="productQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            min="0"
            defaultValue={props.prodBool ? props.product.quantity : 0}
            required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          {props.formButtonText} 
        </Button>
      </Form>
    </React.Fragment>
  )
}


ReusableForm.propTypes = {
  onNewProductCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default ReusableForm