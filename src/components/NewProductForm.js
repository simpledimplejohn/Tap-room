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
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        id: v4()
      }
    )
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        formButtonText="Add Keg"
        prodBool={false}
      ></ReusableForm>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default NewProductForm