import React, {useRef, useEffect} from 'react';
import './style.css';
import Header from './Components/Header/header';
import useWindowSize from './hooks/useWindowSize';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductPage from './Components/ProductPage/productPage'
import Home from './Components/HomePage/Home'
import RavyaProductPageLarge from './Components/Product/ravya25pc';
import ScrollToTop from "./Components/ScrollTop/scrollTop";
import Cart from './Components/Checkout Page/cart';
import { AnimatePresence } from 'framer-motion';
import RecipeChickpea from './Components/Recipe Page/recipeChickpea';
import RecipeRice from './Components/Recipe Page/recipeRice';
import RecipeIceCream from './Components/Recipe Page/recipeIceCream';
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = { em: 'soubcompany@gmail.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('1667595310081040', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
ReactPixel.trackSingle('1667595310081040', event, data); // For tracking default events.
ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
ReactPixel.trackSingleCustom('1667595310081040', event, data); // For tracking custom events.


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
          <Route path="/home/Recipe/Rice" exact={true} component={RecipeRice} />
          <Route path="/home/Recipe/IceCream" exact={true} component={RecipeIceCream} />
          <Route path="/home/Recipe/Chickpea" exact={true} component={RecipeChickpea} />
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

