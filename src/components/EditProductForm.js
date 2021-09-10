import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm (props) {
  const { product } = props;
  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: product.id});
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product" />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
}

export default EditProductForm;