import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./../components/Cart";
import * as Message from "./../constants/Message";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import {
  actDeleteProduct,
  actChangeMessage,
  actUpdateProduct
} from "./../actions/index";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    );
  }
  showCartItem = cart => {
    var { onDeleteProduct, onChangeMessage, onUpdateProduct } = this.props;
    var result = (
      <tr>
        <td>{Message.MSG_EMPTY_CART}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProduct={onDeleteProduct}
            onChangeMessage={onChangeMessage}
            onUpdateProduct={onUpdateProduct}
          />
        );
      });
    }
    return result;
  };
  showTotal = cart => {
    var result = null;
    var { onChangeMessage, onComplete } = this.props;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: product => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProduct: (product, quantity) => {
      dispatch(actUpdateProduct(product, quantity));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(CartContainer);
