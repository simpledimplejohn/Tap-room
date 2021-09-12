import React from "react"
import PropTypes from "prop-types"
import { Button, Row, Col } from "react-bootstrap"

function ProductDetail(props) {
  const { product } = props;

  return (
    <React.Fragment>
      <p>***ProductDetails.js***</p>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <Row>
        <Col>
          <Button
            className="btn-warning"
            onClick={() => props.editProduct(product.id)}
          > Edit **in ProductDetail.js**</Button>
        </Col>
        <Col>
          <Button
            className="btn-danger"
            onClick={() => props.deleteProduct(product.id)}
          > Delete **in ProductDetail.js**</Button>
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
