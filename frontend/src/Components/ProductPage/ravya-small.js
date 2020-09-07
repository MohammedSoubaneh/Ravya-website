import React, {useRef, useEffect} from 'react';
import Header from '../Header/header';
import Ending from '../Ending/ending';
import { gsap } from  'gsap';
import useWindowSize from '../../hooks/useWindowSize'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import '../style/productPageStyle.css';
import ProductPageHero from './ProductPageHero'
import Product from '../Product/product';
import RavyaProductPageSmall from '../Product/ravya2pc';


function RavyaSmall() {
  return (
    <div className="productPage">
        <RavyaProductPageSmall />
        <Ending />
      </div>
  );
}

export default RavyaSmall;