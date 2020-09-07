import React, {useRef, useState, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';





function Cart() { 

  


      const price = document.getElementsByClassName("cartPriceOne");
      console.log(price.length);
      



      function hiddenCartOne() {
        document.querySelector(".hiddenCart").style.display = "none";
      };


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

      const [cart, setCart] = useState([])

      const addToCartTwo = (products) => {
        setCart([...cart, products])
      }
      

return (
  <div className="hiddenCart">
            {cart.map((productsTwo, idxOne) => (
       <div className="productOne" key={idxOne}>
         <h1>{productsTwo.title}</h1>
         <Link to="/Ravya-25pc"><img src={productsTwo.image} width="400px"/></Link>   
         <div className="prices">{productsTwo.cost}</div>        
           <p className="addTo">Add To Cart</p>
           
           </div>
           
      ))}
        <button onClick={() => addToCartTwo(productsTwo)}>Add To Cart</button>                                
        </div>
  );
}

export default Cart;