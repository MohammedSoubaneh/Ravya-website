import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

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
      <div className="cartContainer">
           <div className="innerCartContainer">
               <div className="mainTitle">
               <div className="myBag">My Bag</div>
               </div>
               {
               cartItems.length === 0 ?
               <div className="empty">Cart is empty</div>
               :
               cartItems.map(item =>
            <div className="cartIteams">
                <div className="cartImage"><img src={item.image} alt="product" width="100px"/></div>
                <div className="cartNames"><Link to={"/products/" + item.product}  style={{ textDecoration: 'none', color: "black" }} activeClassName="active-name">
                      {item.name}
                    </Link></div>
                <div className="qtyOuter">
                    <div className="qtyInner">
                        Qty:&nbsp; <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option className="qty" key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    </div>
                    <div className="removeButton" type="button" onClick={() => removeFromCartHandler(item.product)}>&nbsp;Delete</div>
                </div>
                <div className="cartPrice">${item.price}</div>
            </div>
               )
            }
            <div className="cartAction">
               <div className="subTotalMain">
                   Subtotal{/*({cartItems.reduce((a, c) => a + c.qty, 0)} items)*/}:&nbsp;${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                   </div>
               <div className="buttonPrimaryMain" disabled={cartItems.length === 0} role="link">Proceed to Checkout</div>
           </div>
           </div>
        </div>

  )
}

export default Cart
