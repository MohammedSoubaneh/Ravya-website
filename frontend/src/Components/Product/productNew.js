import React, {useRef, useEffect, useState, Component} from 'react';
import data from '../data/data';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function ProductNew() {


  return (

    <div className="productGridContainer">
    <div className="productGridInnerContainer">
       {data.products.map((products, idx) => (
      <div className="ravyaProducts" key={idx}>
  <div className="ravyaName">{products.name}</div>
      <div className="images"><Link to ={products._id}><img src ={products.image} alt={products.name}/></Link></div>
      <div className="pricing">${products.price}</div>
      <button className="addToCartButton">Add To Cart</button>
      </div>
      ))}
      </div>
      </div>
  )
}


export default ProductNew


