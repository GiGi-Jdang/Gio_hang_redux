import React, { Component } from "react";
import Products from "../components/Products";
import { connect } from "react-redux";
import Product from "../components/Product";
import PropTypes from "prop-types";
import * as actions from "../actions/index";
class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    var result = null;

    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={this.props.onAddToCart}
            onChangeMessenger={this.props.onChangeMessenger}
          ></Product>
        );
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

var mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
var mapDispatchToProps = (dispatch, action) => {
  return {
    onAddToCart: (product) => {
      dispatch(actions.addToCart(product, 1));
    },
    onChangeMessenger: (messenger) => {
      dispatch(actions.messenger(messenger));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
