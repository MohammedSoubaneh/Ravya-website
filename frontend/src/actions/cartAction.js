import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstence';
import Cookie from 'js-cookie';



const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
      const { data } = await Axios.get("/api/products/" + productId);
      dispatch({
        type: CART_ADD_ITEM, payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          weight:data.weight,
          qty
        }
      });
      const { cart: { cartItems } } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
  
    }
  }

  const removeFromCart = (productId) => (dispatch, getState) => {
      dispatch({ type: CART_REMOVE_ITEM, payload: productId });

      const { cart: { cartItems } } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
  }
  export {addToCart, removeFromCart }