import React from "react"
import PropTypes from "prop-types"
import { Button, Row, Col } from "react-bootstrap"

function ProductDetail(props) {
  const { product } = props;

  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <Row>
        <Col>
          <Button
            onClick={() => props.editProduct(product.id)}
          > Edit</Button>
        </Col>
        <Col>
          <Button
            onClick={() => props.deleteProduct(product.id)}
          > Delete</Button>
        </Col>
      </Row>
    </React.Fragment >
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func
};

export default ProductDetail
