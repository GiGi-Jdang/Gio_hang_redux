import React, { Component } from "react";
import * as mess from "../constants/messenger";
class CartItem extends Component {
  totalPrice = (price, quantity) => {
    return price * quantity;
  };
  deleteItem = (product) => {
    var { onDeleteCart, onChangeMessenger } = this.props;
    onDeleteCart(product);
    onChangeMessenger(mess.MSG_DELETE_PRODUCT_TO_CART_SUCCESS);
  };
  changeNumberCart = (product, value) => {
    var { onChangeNumberCart, onChangeMessenger } = this.props;
    onChangeNumberCart(product, value);
    onChangeMessenger(mess.MSG_UPDATE_TO_CART_SUCCESS);
  };

  render() {
    var { cartItem } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src={cartItem.product.img}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartItem.product.name}</strong>
          </h5>
        </td>
        <td>{cartItem.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{cartItem.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() => this.changeNumberCart(cartItem.product, -1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a href="/">—</a>
            </label>
            <label
              onClick={() => this.changeNumberCart(cartItem.product, 1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a href="/">+</a>
            </label>
          </div>
        </td>
        <td>{this.totalPrice(cartItem.product.price, cartItem.quantity)}$</td>
        <td>
          <button
            onClick={() => this.deleteItem(cartItem.product)}
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
