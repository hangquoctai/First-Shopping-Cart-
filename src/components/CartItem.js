import React, { Component } from "react";
import * as Message from './../constants/Message';

class CartItem extends Component {
  render() {
    var { item} = this.props;
    var { quantity } = item;
    console.log(item);
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price.toFixed(2)}$</td>
        <td className="center-on-small-only">
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={()=> this.onUpdateProduct(item.product,item.quantity - 1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <span className="qty">{quantity}</span>
            <label
              onClick={()=> this.onUpdateProduct(item.product,item.quantity + 1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity).toFixed(2)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteProduct(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onUpdateProduct = (product,quantity) => {
    if(quantity>0){
      var { onUpdateProduct, onChangeMessage} = this.props;
      this.setState({
        quantity:quantity
      })
      onUpdateProduct(product,quantity)
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }
  onDeleteProduct = (product) => {
    this.props.onDeleteProduct(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
}
export default CartItem;
