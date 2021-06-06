import React from 'react';
import Ending from '../Ending/ending';
import '../style/productPageStyle.css';
import ProductPageHero from './ProductPageHero'
import ProductNew from '../Product/productNew';
import {Helmet} from 'react-helmet';


function ProductPage() {
  return (
    <div className="productPage">
        <Helmet>
          <title>Ravya | Shop Now</title>
          <meta name='description' content='The worlds first Turmeric Infusion. Made with only Turmeric and Black pepper.' />
          <meta name='keywords' content='Ravya, turmeric, turmeric latte, latte, turmeric infusion, infusion, turmeric tea, tea, coffee alternative, healthy, tasty'/>
        </Helmet>
        <ProductPageHero />
        <ProductNew />
        <Ending />
      </div>
  );
}

export default ProductPage;