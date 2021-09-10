import React from "react";
import PropTypes from "prop-types";

function ProductDetails(props){
  const { product, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{product.location} - {product.names}</h3>
      <p><em>{product.issue}</em></p>
      <button onClick={ props.onClickingEdit }>Update Product</button>
      <button onClick={()=> onClickingDelete(product.id) }>Close Product</button>
      <hr/>
    </React.Fragment>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func

};

export default ProductDetails;

// object destructuring
// const { product } = props; gets the product object from the prop
// onClickingDelete: gets button fx and passes it down
// destructured onClickingDelete at the top of the fx