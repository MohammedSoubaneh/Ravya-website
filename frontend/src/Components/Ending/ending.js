import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Ending() {
  let whyUsOneAnimate = useRef(null)
  let whyUsTwoAnimate = useRef(null)
  let whyUsThreeAnimate = useRef(null)
  let theRavyaWay = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to (
      whyUsOneAnimate,
      1, {
        scrollTrigger: {
          trigger: whyUsOneAnimate
        },
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .5
      }
    )

    gsap.to (
      whyUsTwoAnimate,
      1, {
        scrollTrigger: {
          trigger: whyUsTwoAnimate
        },
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 1
      }
    )

    gsap.to (
      whyUsThreeAnimate,
      1, {
        scrollTrigger: {
          trigger: whyUsThreeAnimate
        },
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 1.5
      }
    )

    gsap.to (
      theRavyaWay,
      2, {
        scrollTrigger: {
          trigger: theRavyaWay
        },
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 2
      }
    )
  })

  return (
    <div>
      <div className="sectionFourGrid">
        <div className="whyUsContainer">
          <div className="whyUs"><p>Why Us?</p></div>
          <div className="whyUsReason">
            <div ref={whyUsOneAnimateGo =>{whyUsOneAnimate = whyUsOneAnimateGo}} className="whyUsOne"><img src="/images/right.png" ></img>Ingredients: Turmeric, Black pepper, Nothing else.</div>
            <div ref={whyUsTwoAnimateGo =>{whyUsTwoAnimate = whyUsTwoAnimateGo}} className="whyUsTwo"><img src="/images/right.png" ></img>Our Turmeric Fusion has upto 7X the amount of curcumin then &nbsp;&nbsp;&nbsp;&nbsp;<span>traditional turmeric.</span></div>
            <div ref={whyUsThreeAnimateGo =>{whyUsThreeAnimate = whyUsThreeAnimateGo}} className="whyUsThree"><img src="/images/right.png" ></img>We care about formulating products that are clean, simple, and &nbsp;&nbsp;&nbsp;&nbsp;<span>delicious.</span></div>
            <div ref={theRavyaWayAnimateGo =>{theRavyaWay = theRavyaWayAnimateGo}} className="theRavyaWay">Thats The Ravya Way</div>
          </div>
        </div>
        <div className="recipeContainer">
          <div className="recipe"><Link to="/Recipe" style={{ textDecoration: 'none', color: "black", }}activeClassName="active-logo">Recipe</Link></div>
          <div className="recipeName">
          <div className="recipeOne"></div>
          <div className="recipeTwo"></div>
          <div className="recipeThree"></div>
          </div>
        </div>
        <div className="footerContainer">
          <div className="eMail">Send Us An E-mail</div>
          <div className="emailSend"><form><input type="text" id="email" name="email" placeholder="Email@email.ca"/></form></div>
          <div className="signUp">Sign up to recieve 10% off your First order. By signing up I agree the Ravya’s terms and conditions.</div>
          <div className="terms"> Policies & Terms</div>
          <div className="partnership">Partnership</div>
          <div className="contact">Contact</div>
          <div className="facebook"><img src="images/facebook.png"></img></div>
          <div className="instagram"><img src="images/instagram.png"></img></div>
          <div className="twitter"></div>
        </div>
      </div>
    </div>
  );
}

export default Ending;
