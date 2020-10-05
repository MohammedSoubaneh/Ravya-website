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
import dummyPage from './Components/dummyPage/dummyPage';



function App() {


  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };


  return (
    <AnimatePresence>
    <Router>
      <ScrollToTop />
      <div ref={app} className="app">
      <div ref={scrollContainer} className="scroll">
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home/products" component={ProductPage} />
          <Route path="/products/:id" exact={true} component={RavyaProductPageLarge} />
          <Route path="/Recipe" exact={true} component={RecipePage} />
          <Route path="/products/cart/:id?" exact={true} component={Cart} />
          <Route path="/dummy" exact={true} component={dummyPage} />
        </Switch>
      </div>
      </div>
      </div>
    </Router>
    </AnimatePresence>
  );
}

export default App;

