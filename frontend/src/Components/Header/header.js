import React, {useRef, useEffect } from 'react';
import { gsap, Power3 } from  'gsap';
import { Link } from 'react-router-dom';

function Header() {
    let logoName = useRef(null)
    let hamburgerMenu = useRef(null)
    useEffect(() =>{
        gsap.to(
            logoName,
            1,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .5
            }
            )
            gsap.to(
                hamburgerMenu,
                1,
                {
                    opacity: 1,
                    y: -20,
                    ease: Power3.easeOut,
                    delay: .5
                }
            )
    }, [])

  return (
    <div>
        <div className="header">
            <div className="container">
                <div ref={logoAnimate => {logoName = logoAnimate}} className="logo"><Link to="/" style={{ textDecoration: 'none', color: "black" }}activeClassName="active-logo">Ravya</Link></div>
                <div ref={hamburger => {hamburgerMenu = hamburger}} className="nav">
                <div className="shop"><Link to="/home/products" style={{ textDecoration: 'none', color: "black" }} activeClassName="active-shop">Shop</Link></div>
                <div className="cartIcon"></div>
                </div>
                </div>
            </div>
        </div>
  );
}

export default Header;
