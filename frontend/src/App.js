import React, {useRef, useEffect} from 'react';
import './style.css';
import Header from './Components/Header/header';
import useWindowSize from './hooks/useWindowSize';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from './Components/ProductPage/productPage'
import Home from './Components/HomePage/Home'
import RavyaProductPageLarge from './Components/Product/ravya25pc';
import RecipePage from './Components/Recipe Page/recipePage';
import ScrollToTop from "./Components/ScrollTop/scrollTop";
import Cart from './Components/Checkout Page/cart';
import { AnimatePresence } from 'framer-motion';



function App() {



  return (
    <AnimatePresence>
    <Router>
      <ScrollToTop />
      <div className="app">
      <div className="scroll">
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home/products" component={ProductPage} />
          <Route path="/products/:id" exact={true} component={RavyaProductPageLarge} />
          <Route path="/Recipe" exact={true} component={RecipePage} />
          <Route path="/products/cart/:id?" exact={true} component={Cart} />
        </Switch>
      </div>
      </div>
      </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;

