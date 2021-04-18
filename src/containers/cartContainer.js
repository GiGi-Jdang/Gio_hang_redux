import React, { Component } from "react";
import { connect } from "react-redux";
import * as types from "../constants/messenger";
import Cart from "../components/Cart";
import CartItem from "../components/CartIem";
import TotalPrice from "../components/TotalPrice";
import * as actions from "../actions/index";
// import PropTypes from 'prop-types';
class cartContainer extends Component {
  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCart(cart)}
        {this.sumTotal(cart)}
      </Cart>
    );
  }

  showCart = (cart) => {
    var { onDeleteCart, onChangeMessenger, onChangeNumberCart } = this.props;
    var result = (
      <tr>
        <td>{types.MSG_TO_CART_NULL}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return (
          <CartItem
            index={index}
            key={index}
            cartItem={cartItem}
            onDeleteCart={onDeleteCart}
            onChangeMessenger={onChangeMessenger}
            onChangeNumberCart={onChangeNumberCart}
          ></CartItem>
        );
      });
    }
    return result;
  };
  sumTotal = (cart) => {
    var result = null;
    var { completeCart, onChangeMessenger } = this.props;
    if (cart.length > 0) {
      result = (
        <TotalPrice
          cart={cart}
          completeCart={completeCart}
          onChangeMessenger={onChangeMessenger}
        ></TotalPrice>
      );
    }
    return result;
  };
}

// cartContainer.propTypes={
//   cart:PropTypes.arrayOf(
//     PropTypes.shape({
//       id:PropTypes.number.isRequired,
//       img:PropTypes.string.isRequired,
//       description:PropTypes.string.isRequired,
//       price:PropTypes.number.isRequired,
//       inventory:PropTypes.number.isRequired,
//       rating:PropTypes.number.isRequired,
//     })
//   )
// }

var mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
var mapDispatchToProps = (dispatch, action) => {
  return {
    onDeleteCart: (product) => {
      dispatch(actions.deleteCard(product));
    },
    onChangeMessenger: (messenger) => {
      dispatch(actions.messenger(messenger));
    },
    onChangeNumberCart: (product, value) => {
      dispatch(actions.changeNumberCart(product, value));
    },
    completeCart: () => {
      dispatch(actions.completeCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartContainer);
