import React from 'react';
import Ending from '../Ending/ending';
import Recipe from '../Recipe Page/recipe';
import ProductNew from '../Product/productNew';

function RecipePage() {
  return (
    <div className="productPage">
        <Recipe />
        <div className="spaceBetween"></div>
        <ProductNew />
        <Ending />
      </div>
  );
}

export default RecipePage;