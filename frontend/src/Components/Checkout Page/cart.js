import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';

const stripePromise = loadStripe('pk_test_51HLEnyGLtWDqx1qOuhwNOtq65b6yePscQjYcES7rTYRJK0R44QMWo4i1R4VAf3GLDv1Gg3jQ4pezZDWoFDiRXL0L005dHHnLqM');

const countries = [
  { name: "Canada", value: 'CA' },
  { name: "USA", value: 'US' },
  { name: "Germany", value: 'DE'},
  { name: "France", value: 'FR'}

]
function Cart(props) {
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [addressType, setAdressType] = useState("residential")
  const [street, setStreet] = useState("")
  const [shipmentFee, setShipment] = useState(0)
  const [country, setCountry] = useState('CA')
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
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const data = cartItems.map(item => (
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty
      }
    ))
    data.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Shipping Cost',
          images: ['https://logos-download.com/wp-content/uploads/2016/10/Canada_Post_logo_logotype.png'],
        },
        unit_amount: shipmentFee * 100,
      },
      quantity: 1
    })
    const response = await axios.post("/create-session", { cartItems: data })
    const session = await response.data;
    console.log("SESSION", session)
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      alert(result.error)

    }
  };
  const hanldeSubmit = async (event) => {
    event.preventDefault()
    let residential
    let company
    addressType === "company" ? company = true : residential = true
    console.log({ address, name, email, zip, city, state, addressType, phone, company, residential, country })
    const data = { address, name, email, zip, city, state, addressType, phone, country }
    const response = await axios.post("/api/create-shipment", { to_address: data, cartItems })
    const fee = await response.data;
    console.log("Shipment Fee", fee)
    setShipment(parseFloat(fee.shipmentFee))
  }
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
                <div className="cartImage"><img src={item.image} alt="product" width="100px" /></div>
                <div className="cartNames"><Link to={"/products/" + item.product} style={{ textDecoration: 'none', color: "black" }} activeClassName="active-name">
                  {item.name}
                </Link></div>
                <div className="qtyOuter">
                  <div className="qtyInner">
                    <span>Qty:</span>&nbsp; <select className="qtyCart" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
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
        <div className="formContainer">

          <div className="formOuterContainer" onSubmit={hanldeSubmit}>
            <div className="formInnerContainer">
              <h1>Shipping Address</h1>
              <input
                className="inputOne"
                placeholder="Full Name"
                name="name"
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div className="spaceBetweenForm"></div>
              <input
                className="inputOne"
                placeholder="Street 1"
                name="address"
                type='text'
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              <input
                className="inputOne"
                placeholder="Apartment, suite, etc. (optional)"
                name="street"
                type='text'
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />

              <input
                className="inputOne"
                placeholder="City"
                name="city"
                type='text'
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <input
                className="inputOne"
                placeholder="Email"
                email="email"
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="spaceBetweenForm"></div>
              <div className="spaceBetweenForm"></div>
              <select
                className="inputOne"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              >
                {countries.map(country => (<option value={country.value}>{country.name}</option>))}
              </select>
              <input
                className="inputOne"
                placeholder={country === 'CA' ? 'Province' : 'State'}
                name="state"
                type='text'
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
              <div className="spaceBetweenForm"></div>
              <input
                className="inputOne"
                placeholder={country === 'CA' ? 'Postal Code' : 'Zip'}
                name="zip"
                type='text'
                value={zip}
                onChange={(event) => setZip(event.target.value)}
              />
              <input
                className="inputOne"
                placeholder="Phone"
                name="phone"
                type='text'
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <div className="spaceBetweenForm"></div>
              
              <div className="addressSubmit" type="submit" onClick={hanldeSubmit}>submit</div>
            </div>
          </div>

        </div>
        <div className="cartAction">
          <div className="subTotalMain">
            Shipping Cost{/*({cartItems.reduce((a, c) => a + c.qty, 0)} items)*/}:&nbsp;${shipmentFee}
          </div>
          <div className="subTotalMain">
            Subtotal{/*({cartItems.reduce((a, c) => a + c.qty, 0)} items)*/}:&nbsp;${cartItems.reduce((a, c) => a + c.price * c.qty, shipmentFee)}
          </div>
          <motion.div whileTap={{ scale: 1.1 }} className="buttonPrimaryMain" disabled={cartItems.length === 0} role="link" onClick={handleClick}>Proceed to Checkout</motion.div>
        </div>
        <div className="cartSpace"></div>
      </div>
    </div>

  )
}

export default Cart
