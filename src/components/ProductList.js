import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product) =>
        <Product 
          whenProductClicked = { props.onProductSelection }
          names={product.names}
          location={product.location}
          issue={product.issue}
          id={product.id}
          key={product.id}/>
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};
//this passes down the propTypes:
// productList the array
// & onProductSelection the function determines whether a product has been selected

export default ProductList;