import React, {useRef, useEffect, useState, Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productAction';
import { motion } from "framer-motion"
import useMediaQuery from "../windowHooks/productsWindowHooks";


function ProductNew(props) {

  const transition = { duration: 0.6, ease: [0.6, 0.01, -0.23, 0.96] };

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const isIpad = useMediaQuery('(min-width: 1025px)');
  const productStyle = {
    container: isIpad => ({
      position: "relative",
      right:"300px",
      left:"60px"
    })

  };

  useEffect(() => {
    dispatch(listProducts ());

    return () => {

    };
  }, []);


  return (
    loading? <div>Loading...</div> :
    error? <div>{error}</div> :
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}className="productGridContainer">
    <div className="productGridInnerContainer">
       {products.map((products, idx) => (
      <div className="ravyaProducts" key={idx}>
      <div className="ravyaName" style={{position:"relative", bottom:products.headerTop}}>{products.name}</div>
      <div className="images"><Link to ={'/products/' + products._id}><motion.img layout whileHover={{scale: 1.1}} whileTap={{ scale: 0.9}} transition={transition} src ={products.image} alt={products.name} width={products.size}/></Link></div>
      <div className="pricing" style={{position:"relative", bottom:products.pixelTop}}>${products.price}</div>
      </div>
      ))}
      </div>
      </motion.div>
  )
}


export default ProductNew


