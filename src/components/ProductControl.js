import React from 'react';
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import { Button } from "react-bootstrap";
import ProductDetail from "./ProductDetail";
import EditProduct from "./EditProduct";
import Cart from "./Cart";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        newProductFormVisible: false,
        mainProductList: [],
        selectedProduct: null,
        edit: false,
        cart: []
      }


    // this.state = {
    //   newProductFormVisible: false,
    //   mainProductList: [{
    //     name: "Test Product",
    //     description: "Test Description",
    //     quantity: 105,
    //     id: "test-id"
    //   }, {
    //     name: "Test 2 Product",
    //     description: "Test 2 Description",
    //     quantity: 5,
    //     id: "test-id-2"
    //   }],
    //   selectedProduct: null,
    //   edit: false,
    //   cart: [{
    //     name: "Test 2 Product",
    //     description: "Test 2 Description",
    //     quantity: 1,
    //     id: "test-id-2"
    //   }]
    // }


  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        newProductFormVisible: false,
        selectedProduct: null,
        edit: false
      })
    } else {
      this.setState(prevState => ({
        newProductFormVisible: !prevState.newProductFormVisible
      }))
    }
  }

  handleDeletingProductFromList = (id) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== id)
    this.setState({
      mainProductList: editedMainProductList,
      selectedProduct: null
    })
  }

  handleSwitchToEdit = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({
      selectedProduct: selectedProduct,
      edit: true
    });
  }


  handleEditing = (editedProduct) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct["id"])
      .concat(editedProduct)
    this.setState({
      mainProductList: editedMainProductList,
      selectedProduct: null,
      edit: false
    })
  }

  handleAddingNewProductToList = (newProduct) => {
    if (newProductValid(newProduct)) {
      const newMainProductList = this.state.mainProductList.concat(newProduct);
      this.setState({
        mainProductList: newMainProductList,
        newProductFormVisible: false
      })
    } else {
      this.setState({
        newProductFormVisible: false
      })
    }
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({ selectedProduct: selectedProduct });
  }

  handleAddStock = (productToEdit) => {
    let updatedProduct = productToEdit
    updatedProduct.quantity++
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== productToEdit.id)
      .concat(updatedProduct)
    this.setState({
      mainProductList: editedMainProductList
    })
  }

  handleSubtractStock = (productToEdit) => {
    let updatedProduct = productToEdit
    updatedProduct.quantity--
    if (updatedProduct.quantity < 0) {
      updatedProduct.quantity = 0
    } else {
      const currentCart = this.state.cart
      const newCart = cartBranche(currentCart, productToEdit)
      const editedMainProductList = this.state.mainProductList
        .filter(product => product.id !== productToEdit.id)
        .concat(updatedProduct)
      this.setState({
        mainProductList: editedMainProductList,
        cart: newCart
      })
      console.log(newCart)
    }
  }

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.state.edit) {
      visibleState = <EditProduct
        product={this.state.selectedProduct}
        editProductFunction={this.handleEditing}
      />
      buttonText = "Head back to Product List 1x **text in ProductControl.js**"
    } else if (this.state.selectedProduct != null) {
      visibleState = <ProductDetail
        product={this.state.selectedProduct}
        deleteProduct={this.handleDeletingProductFromList}
        editProduct={this.handleSwitchToEdit}
      />
      buttonText = "Head back to Product List 2x **text in ProductControl.js**"
    } else if (this.state.newProductFormVisible) {
      visibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Head back to Product List 3x **text in ProductControl.js**"
    } else {
      visibleState = <ProductList
        productList={this.state.mainProductList.sort(dynamicSort("name"))
        }
        onProductSelection={this.handleChangingSelectedProduct}
        addStock={this.handleAddStock}
        subtractStock={this.handleSubtractStock}
      />
      buttonText = "Add a product **text in ProductControl.js**"
    }

    return (
      <React.Fragment>
        <p><strong>****Just a button, ProductControl.js***</strong></p>
        <Cart items={this.state.cart}/>
        {visibleState}
        <Button onClick={this.handleClick} variant="dark" className="mt-3 p-5">{buttonText}**ProductControl.js***</Button>
      </React.Fragment>
    ) 
  }
}

export default ProductControl

const dynamicSort = (property) => {
  let sortOrder = 1;
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function newProductValid(newProduct) {
  if (newProduct.name && newProduct.quantity && newProduct.description) {
    return true
  }
}

function cartBranche(newCart, productToEdit) {
  let filteredCart = newCart.filter(item => {
    return item.id === productToEdit.id
  })

  if (filteredCart.length === 1) {
    newCart.forEach((object) => {
      if (object.id === productToEdit.id) {
        object.quantity++
      }
    })
  } else {
    const cartProduct = productToEdit
    const cartItem = {
      id: cartProduct.id,
      name: cartProduct.name,
      quantity: 1
    }
    newCart.push(cartItem)
  }
  return newCart
}