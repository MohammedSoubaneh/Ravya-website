import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer} from '../src/reducers/cartReducers';
import Cookie from 'js-cookie';


const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems }};
const reducer =  combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;