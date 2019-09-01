import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './../components/Product';
import Products from './../components/Products.js';
import { actAddToCart,actChangeMessage, actDeleteProduct} from './../actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
    showProduct(products){
        var result=null;
        var { onAddToCart,onChangeMessage,onDeleteProduct } = this.props;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <Product 
                    key={index} 
                    product={product}
                    onAddToCart = { onAddToCart }
                    onChangeMessage = {onChangeMessage}
                    onDeleteProduct={onDeleteProduct}
                    />
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart:(product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage:(message) => {
            dispatch(actChangeMessage(message))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps,null)(ProductsContainer);
