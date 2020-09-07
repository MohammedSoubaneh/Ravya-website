import React, {useRef, useEffect} from 'react';
import Header from '../Header/header';
import Ending from '../Ending/ending';
import { gsap } from  'gsap';
import useWindowSize from '../../hooks/useWindowSize'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import Recipe from '../Recipe Page/recipe';
import Product from '../Product/product';

function RecipePage() {
  return (
    <div className="productPage">
        <Recipe />
        <Product />
        <Ending />
      </div>
  );
}

export default RecipePage;