import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'



function Banner() {

    let bannerBgAnimate = useRef(null)
    let bannerBgAdditionAnimate = useRef(null)

    useEffect (() =>{
        gsap.from (
            bannerBgAnimate,
            1, {
                width: 0,
                skewX: 4,
                ease: Power3.easeInOut
            }
        )
    })
    return (
        <div className="bannerBgConatiner">
            <div ref={bannerBgGo => {bannerBgAnimate = bannerBgGo}} className="bannerBg"></div>
            <div ref={bannerBgAdditionGo => {bannerBgAdditionAnimate = bannerBgAdditionGo}} className="bannerBgAddition"></div>
        </div>
    )
}

export default Banner