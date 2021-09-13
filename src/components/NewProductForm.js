import React from "react";
import { v4 } from 'uuid'
import PropTypes from "prop-types"
import ReusableForm from "./ReusableForm";

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault()
    props.onNewProductCreation(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        flavor: event.target.flavor.value,
        price: event.target.price.value,
        quantity: 124,
        id: v4()
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        formButtonText="Add Keg"
      ></ReusableForm>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default NewProductForm