import React, { Component } from "react";
import * as mess from "../constants/messenger";
class Product extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.img} className="img-fluid" alt="" />
            <a href="/">
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="/">{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(product.rating)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  onClick={() => this.onAddToCart(product)}
                  href="/#"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating = (rating) => {
    var result = [];
    for (var i = 0; i < rating; i++) {
      result.push(<i key={rating + i} className="fa fa-star" />);
    }
    for (var j = 0; j < 5 - rating; j++) {
      result.push(<i key={j} className="fa fa-star-o" />);
    }
    return result;
  };
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessenger(mess.MSG_ADD_PRODUCT_TO_CARD_SUCCESS);
  };
}

export default Product;
