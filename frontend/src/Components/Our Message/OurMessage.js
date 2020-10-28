import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

function OurMessage() {
  let ourMessageAnimate = useRef(null)
  let aboutAnimate = useRef(null)

  useEffect(() =>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to (
      ourMessageAnimate,
      1, {
        scrollTrigger: {
          trigger: ourMessageAnimate
        },
        delay: .5,
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
      <div className="standard">Inside each Sache of Ravya Turmeric Infusion lies 5 different kinds of turmeric, blended to
perfection.</div>
      <div ref= {aboutAnimateGo => {aboutAnimate = aboutAnimateGo}} className="about">Simple, Clean, and Delicious</div>
      <div className="explore">Explore The Range</div>
      </div>
    </div>
  );
}

export default OurMessage;
