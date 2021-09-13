import React from "react";
import PropTypes from "prop-types"
import ReusableForm from "./ReusableForm";

function EditProduct(props) {
  function handleEditProductFormSubmission(event) {
    event.preventDefault()
    props.editProductFunction(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        flavor: event.target.flavor.value,
        kegs: event.target.kegs.value,
        id: props.product.id
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        formButtonText="Edit"
        product={props.product}
        prodBool={true}
      ></ReusableForm>
    </React.Fragment>
  )
}

EditProduct.propTypes = {
  editProductFunction: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default EditProduct