import React from 'react';
import {motion} from 'framer-motion';

function ProductPageHero(){
    const transitionDelay = { delay: 0.5, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };

    return (
        <div className="productHeroContainer">
            <div className="productHeroInner">
                <motion.h1 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={transitionDelay}>You Wont Believe it Until you Taste it.</motion.h1>
            </div>
        </div>
    )
}
export default ProductPageHero;