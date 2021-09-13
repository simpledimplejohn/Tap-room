import React from "react"
import PropTypes from "prop-types"
import { Button, Row, Col } from "react-bootstrap"

function ProductDetail(props) {
  const { product } = props;

  return (
    <React.Fragment>
      <h3>Name: {product.name}</h3>
      <p>Brand: {product.brand}</p>
      <p>Flavor: {product.flavor}</p>
      <p>Price: {product.price}</p>
      <p>Drinks Left: {product.quantity}</p>
      
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
