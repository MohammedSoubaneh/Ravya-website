import React, {useRef, useEffect, useState, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

function Cart(props) {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId, qty));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);
  

  return (
      <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
          <h3 className="bag">
            My Bag
          </h3>
        {
          cartItems.length === 0 ?
            <div className="dummyCart">
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" width="100px"/>
                </div>
                <div className="cart-name">
                  <div className="cartName">
                    <Link to={"/products/" + item.product}  style={{ textDecoration: 'none', color: "black" }} activeClassName="active-name">
                      {item.name}
                    </Link>

                  </div>
                  <div className="qtySection">
                    Qty:&nbsp;
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option className="qty" key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <div type="button" className="buttonRemove" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </div>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3 className="subTotal">
        Subtotal {/*({cartItems.reduce((a, c) => a + c.qty, 0)} items)*/}
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <div className="buttonPrimaryMove" disabled={cartItems.length === 0} role="link">
        Proceed to Checkout
      </div>

    </div>

  </div>
  )
}

export default Cart
