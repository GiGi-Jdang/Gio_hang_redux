import React, { Component } from "react";
import * as mess from "../constants/messenger";
class TotalPrice extends Component {
  render() {
    var { cart } = this.props;
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.sumTotal(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button
            onClick={this.completeCart}
            type="button"
            className="btn btn-primary waves-effect waves-light"
          >
            Thanh toán tất cả
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    );
  }
  sumTotal = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
  completeCart = () => {
    var { completeCart, onChangeMessenger } = this.props;
    completeCart();
    onChangeMessenger(mess.MSG_COMPLETE);
  };
}

export default TotalPrice;
