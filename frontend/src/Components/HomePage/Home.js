import React, {useRef, useEffect} from 'react';
import Header from '../Header/header';
import Hero from '../Hero Section/herosection'
import OurMessage from '../Our Message/OurMessage'
import Product from '../Product/product'
import Ending from '../Ending/ending'
import { gsap } from  'gsap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';




  function Home() {

  return (
    <div>
            <Hero />
            <OurMessage />
            <Product />
            <Ending />
            </div>
  );
}



export default Home;