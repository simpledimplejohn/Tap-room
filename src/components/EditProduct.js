import React from "react";
import PropTypes from "prop-types"
import ReusableForm from "./ReusableForm";

function EditProduct(props) {
  function handleEditProductFormSubmission(event) {
    event.preventDefault()
    props.editProductFunction(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        id: props.product.id
      }
    )
  }

  return (
    <React.Fragment>
      <p><strong>****Text Here, EditProduct.js***</strong></p>
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