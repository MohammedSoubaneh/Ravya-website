import React, {useRef, useState, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cart from '../Checkout Page/cart';


const PAGE_PRODUCTS = 'products';


function Product() {
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


  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

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


  const addToCart = (products) => {
    setCart([...cart, products])
  }

  const addToCartTwo = (productsTwo) => {
    console.log(productsTwo)
    setCart([...cart, productsThree])
  }

  const addToCartThree = (productsThree) => {
    setCart([...cart, productsThree])
  }


  const renderProducts = () => (


    <div className="sectionThreeGrid">
    <button><Link to="/cart" >Go To Cart({cart.length}</Link></button>
    <div className="productContainer">
      {products.map((products, idxOne) => (
       <div className="productOne" key={idxOne}>
         <h1 ref={productOneGo => {productOneAnimate = productOneGo}} >{products.title}</h1>
         <Link to="/Ravya-25pc"><img src={products.image}/></Link>   
         <div className="prices" ref={priceGo => {priceAnimate = priceGo}}>{products.cost}</div>        
           <button> Add To Cart </button>
           </div>
      ))}
      {productsTwo.map ((productsTwo, idxTwo) => (
       <div className="productTwo" key={idxTwo}>
       <h1 ref={productTwoGo => {productTwoAnimate = productTwoGo}}>{productsTwo.title}</h1>
      <Link to="/Ravya-15pc"><img src={productsTwo.image}/></Link>
       <div className="prices" ref={priceTwoGo => {priceTwoAnimate = priceTwoGo}}>{productsTwo.cost}</div> 
      <button>Add To Cart </button>
          </div>
      ))}

      {productsThree.map ((productsThree, idxThree) => (
       <div className="productThree" key={idxThree}>
       <h1 ref={productThreeGo => {productThreeAnimate = productThreeGo}}>{productsThree.title}</h1>
      <Link to="/Ravya-2pc"><img src={productsThree.image}/></Link>
      <div className="prices" ref={priceThreeGo => {priceThreeAnimate = priceThreeGo}}>{productsThree.cost}</div> 
      <button>Add To Cart</button> 
       </div>
      ))}

      </div>
    </div>


  );


  return (
    <div>
      {page === 'products' && renderProducts()}
      
    </div>
  );
}

export default Product;
