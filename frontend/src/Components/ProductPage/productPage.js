import React from 'react';
import Ending from '../Ending/ending';
import '../style/productPageStyle.css';
import ProductPageHero from './ProductPageHero'
import ProductNew from '../Product/productNew';


function ProductPage() {
  return (
    <div className="productPage">
        <ProductPageHero />
        <ProductNew />
        <Ending />
      </div>
  );
}

export default ProductPage;