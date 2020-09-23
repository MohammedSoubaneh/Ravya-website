import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

function OurMessage() {
  let ourMessageAnimate = useRef(null)
  let standardAnimate = useRef(null)
  let aboutAnimate = useRef(null)
  let exploreAnimate = useRef(null)

  useEffect(() =>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to (
      ourMessageAnimate,
      1, {
        scrollTrigger: {
          trigger: ourMessageAnimate
        },
        delay: .5,
        x: -60,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
    
    gsap.to(
      aboutAnimate,
      1, {
        scrollTrigger: {
          trigger: aboutAnimate
        },
        delay: .5,
        y: -20,
        ease: Power3.easeOut,
        opacity: 1
      }
    )
  }, [])

  return (
    <div className="sectionTwoGrid">
      <div className="whoWeAre">
      <div ref= {ourMessageAnimateGo => {ourMessageAnimate = ourMessageAnimateGo}} className="ourMessage">Setting New Standards </div>
      <div className="imageOne"></div>
      <div className="imageTwo"></div>
      <div ref= {standardAnimateGo => {standardAnimate = standardAnimateGo}} className="standard"><p>Inside each Sache of Ravya Turmeric Infusion lies 5 different kinds of turmeric, blended to
perfection.</p></div>
      <div ref= {aboutAnimateGo => {aboutAnimate = aboutAnimateGo}} className="about"><p>Simple, Clean, and Delicious </p></div>
      <div style={{position:"relative", bottom:"70px"}} ref= {exploreAnimateGo => {exploreAnimate = exploreAnimateGo}} className="explore">Explore The Range</div>
      </div>
    </div>
  );
}

export default OurMessage;
