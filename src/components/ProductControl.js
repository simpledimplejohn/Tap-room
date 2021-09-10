import React from "react";
import NewProductForm from "./NewProductForm";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import EditProductForm from './EditProductForm';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    };
  }
  //event handler fx prefixed with handle
  //use .concat(newProduct) to makes a copy of the array instead of adding to it with .push(newProduct)
  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({masterProductList: newMasterProductList,
                  formVisibleOnPage: false 
                  });
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState =>({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
  //if this.state.selectedProduct isn't null the we must be on a product detail page, in that case we know that formVisibleOnPage should be false and selectedProduct should be null
  //setState() takes an object, and can take two arguments 
  //pass in current state, change to the opposite state with !
  //use an arrow fx for automatic this. binding

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }
  //filter() returns array so set to [0] because we only need one item

  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }
  // filter out everything that doesn't have our delte id, then make a new list with those (functional)
  //then add the new filtered list to the key value pair
  //set slected product back to null so that TickList will be showing

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingProductInList = (productToEdit) => {
    const editedMasterProductList = this.state.masterProductList  
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
      editing: false,
      selectedProduct: null
    });
  }
  //filter previous version of product, then add the edited version of the product to the list with concat(), this way we do not mutate state
  //then set masterProductList to = updated product
  // then update bool to false

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
        currentlyVisibleState = <EditProductForm 
          product = {this.state.selectedProduct} 
          onEditProduct = {this.handleEditingProductInList} />
        buttonText = "Return to Product List";
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetails
        product = {this.state.selectedProduct} 
        onClickingDelete = {this.handleDeletingProduct} 
        onClickingEdit ={this.handleEditClick} /> //onClickingDelete passes our handleDeletingProduct as a prop
      buttonText = "Return to Product List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm 
        onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />
// this is where we pass the ability to selecte the product from the product list onProductSelection and currentlyVisibleState are props
      buttonText = "Add Product";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {<button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
      //button lives on the DOM so this needs to be bound so it can have access to it
      //arrow fx automatically bind this
    );
  }
}

export default ProductControl;