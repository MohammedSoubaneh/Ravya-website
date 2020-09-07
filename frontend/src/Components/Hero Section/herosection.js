import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';

function Hero() {
  let heroTextAnimation = useRef(null)
  let heroSubTextAnimation = useRef(null)
  let bannerBgAnimate = useRef(null)
  let bannerBgAdditionAnimate = useRef(null)
  let bannerBgWhiteAnimate = useRef(null)

  let bannerTL = gsap.timeline()

  useEffect (() => {
    gsap.to (
      heroTextAnimation,
      1,
      {
        opacity: 1,
        y: -20,
        delay: 1.2,
        ease: Power3.easeOut
      }
    )
    gsap.to(
      heroSubTextAnimation,
      1,
      {
        opacity: 1,
        y: -20,
        delay: 1.5,
        ease: Power3.easeOut
      }
    )

      bannerTL.from (
        [bannerBgAnimate, bannerBgAdditionAnimate, bannerBgWhiteAnimate], 
        2, {
          width: 0,
          skewX: 10,
          ease: Power3.easeInOut,
          stagger: {
            amount: .2
          }
        }
      )
  }, [])




  


  return (
    <div>
      <div className="firstAnimate">
      <div className="heroSectionContainer">
      <div className="bannerBgConatiner">
            <div ref={bannerBgGo => {bannerBgAnimate = bannerBgGo}} className="bannerBg"></div>
            <div ref={bannerBgAdditionGo => {bannerBgAdditionAnimate = bannerBgAdditionGo}} className="bannerBgAddition"></div>
            <div ref={bannerBgWhiteGo => {bannerBgWhiteAnimate = bannerBgWhiteGo}} className="bannerBgWhite"></div>
        </div>
      <div className="heroSection">
      <div ref={heroTextGo => {heroTextAnimation = heroTextGo}} className="heroText">Worlds First Turmeric Infusion.</div>
      <div ref={heroSubTextGo => {heroSubTextAnimation = heroSubTextGo}} className="heroSubText">You wont believe it until you taste it.</div>
      </div>
      </div>
      </div>
    </div> 
  );
}

export default Hero;
