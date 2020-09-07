import React, {useRef, useState, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cart from '../Checkout Page/cart';


function Test() {
  let productOneAnimate = useRef(null)
  let productTwoAnimate = useRef(null)
  let productThreeAnimate = useRef(null)
  let priceAnimate = useRef(null)
  let priceTwoAnimate = useRef(null)
  let priceThreeAnimate = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to (
      productOneAnimate,
      1,
       {
         scrollTrigger: {
           trigger:".addTo"
         },
         delay: .5,
         y: -20,
         ease: Power3.easeOut,
         opacity: 1
       }
    )
    gsap.to (
      productTwoAnimate,
      1,
      {
        scrollTrigger: {
          trigger:".addTo"
        },
        delay: .5,
        y: -20,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
    gsap.to (
      productThreeAnimate,
      1,
      {
        scrollTrigger: {
          trigger:".addTo"
        },
        delay: .5,
        y: -20,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
    gsap.to (
      priceAnimate,
      1,
      {
        scrollTrigger: {
          trigger:".addTo"
        },
        delay: .5,
        y: -10,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
    gsap.to (
      priceTwoAnimate,
      1,
      {
        scrollTrigger: {
          trigger:".addTo"
        },
        delay: .5,
        y: -10,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
    gsap.to (
      priceThreeAnimate,
      1,
      {
        scrollTrigger: {
          trigger:".addTo"
        },
        delay: .5,
        y: -10,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
  })





  const [products] = useState([
    {
      title: 'For Your Health',
      name: 'Ravya Turmeric Infion 25pc',
      cost: '19.99',
      image: '/images/25pc.png'
    },
  ]);

  const [productsTwo] = useState ([
      {
            title: 'For Your Creativity',
            name: 'Ravya Turmeric Infion 15pc',
            cost: '14.99',
            image: '/images/15pc.png'
      }
  ]);
  
  const [productsThree] = useState ([
      {
            title: 'For Your Someone Special',
            name: 'Ravya Turmeric Infion 2pc',
            cost: '4.99',
            image: '/images/2pc.png'
      }
  ]);


  return (
    <div>
      <div className="sectionThreeGrid">
      <div className="productContainer">
        {products.map((products) => (
         <div className="productOne">
           <h1 ref={productOneGo => {productOneAnimate = productOneGo}} >{products.title}</h1>
           <Link to="/Ravya-25pc"><img src={products.image}/></Link>   
           <div className="prices" ref={priceGo => {priceAnimate = priceGo}}>{products.cost}</div>        
             <p className="addTo">Add To Cart</p>
             </div>
        ))}
        {productsTwo.map ((productsTwo) => (
         <div className="productTwo">
         <h1 ref={productTwoGo => {productTwoAnimate = productTwoGo}}>{productsTwo.title}</h1>
        <Link to="/Ravya-15pc"><img src={productsTwo.image}/></Link>
         <div className="prices" ref={priceTwoGo => {priceTwoAnimate = priceTwoGo}}>{productsTwo.cost}</div> 
        <p>Add To Cart</p>
            </div>
        ))}

        {productsThree.map ((productsThree) => (
         <div className="productThree">
         <h1 ref={productThreeGo => {productThreeAnimate = productThreeGo}}>{productsThree.title}</h1>
        <Link to="/Ravya-2pc"><img src={productsThree.image}/></Link>
        <div className="prices" ref={priceThreeGo => {priceThreeAnimate = priceThreeGo}}>{productsThree.cost}</div> 
        <p>Add To Cart</p> 
         </div>
        ))}

        </div>
      </div>
    </div>
  );
}

export default Test;
