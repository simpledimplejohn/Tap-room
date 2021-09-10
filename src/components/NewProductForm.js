import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

//props.onNewProductCreation() does not have access to .this in this commponent but does have access to props
//onNewProductCreation() is the callback from the parent commponent its invoked in ProductControler.js wiht the name (newProduct) that will get passed into the handleAddingNewProductToList fx

function NewProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  return (
    //onSubmit  event handler triggers the fx
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Add to Cart!" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;