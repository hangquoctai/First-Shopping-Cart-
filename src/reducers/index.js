import { combineReducers} from 'redux';
import products from './products.js';
import cart from './cart.js';
import message from './message';

const appReducers = combineReducers ({
    products,
    cart,
    message

})

export default appReducers;