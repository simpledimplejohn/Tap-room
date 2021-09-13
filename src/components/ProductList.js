import React from "react";
import Product from "./Product"
import PropTypes from "prop-types"

function ProductList(props) {
  return (
    <React.Fragment>
      <h2>See our available inventory below:</h2>
      {props.productList.map((product) =>
        <Product name={product.name}
          whenProductClicked={props.onProductSelection}
          stockPlus={props.addStock}
          stockMinus={props.subtractStock}
          description={product.description}
          quantity={product.quantity}
          id={product.id}
          key={product.id} />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func,
  addStock: PropTypes.func,
  subtractStock: PropTypes.func
}

export default ProductList