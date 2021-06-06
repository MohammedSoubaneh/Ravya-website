import React from 'react';
import Hero from '../Hero Section/herosection';
import OurMessage from '../Our Message/OurMessage';
import ProductNew from '../Product/productNew';
import Ending from '../Ending/ending';
import {Helmet} from 'react-helmet';



  function Home() {

  return (
    <div>
            <Helmet>
              <title>Ravya Turmeric Infusion</title>
              <meta name='description' content='The worlds first Turmeric Infusion. Made with only Turmeric and Black pepper.' />
              <meta name='keywords' content='Ravya, turmeric, turmeric latte, latte, turmeric infusion, infusion, turmeric tea, tea, coffee alternative, healthy, tasty' />
            </Helmet>
            <Hero />
            <OurMessage />
            <ProductNew />
            <Ending />
            </div>
  );
}



export default Home;