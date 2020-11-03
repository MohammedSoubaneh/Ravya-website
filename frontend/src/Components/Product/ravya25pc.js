import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { detailsProduct } from '../../actions/productAction';
import {motion} from 'framer-motion';
import VideoPlayer from 'react-video-js-player';



function RavyaProductPageLarge(props){

    const transition = { duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
   
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    

    useEffect(() => { 
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/products/cart/" + props.match.params.id)
    }
    
    return (
     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (  
                <>
                <div className="largeHeroContainer">
                <div className="largeHeroInner">
                <div className="heroImage"><img width={product.size} src={product.heroImage}/></div>
                
                <div className="productImage">
                <motion.img initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={transitionDelay}  src={product.image} width={product.size}/>
                <div className="productText">
                    <motion.h1 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={transition}>{product.title}</motion.h1>
                    <motion.h2 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={transition}>{product.name}</motion.h2>
                    <motion.p initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={transition} className="price">${product.price}</motion.p>
                    <motion.div onClick={handleAddToCart} whileHover={{scale: 1.1}} whileTap={{scale:1}} className="addToCart">Buy Now</motion.div>
                </div>
                </div>
                </div>
            <div className="brillianCup">How to Make a Brilliant Cup Of Ravya</div>
            <div className="howToMakeContainer">
            <div className="howToMakeInner">
                    <div className="stepOneTitle" >Step One</div>
                    <div className="stepOneInstruction">Boil any plant based milk to 180 F (80 C).</div>
                    <div className="stepTwoTitle">Step Two</div>
                    <div className="stepTwoInstruction">Place one infusion bag in a cup. Add 150ml of boiled milk to your cup.</div>
                    <div className="stepThreeTitle">Step Three</div>
                    <div className="stepThreeInstruction">Dip the Infusion a few times and allow it to infuse for 3-4 minutes. Add Sweeteners as per your taste and Enjoy!</div>
            </div>
            <div className="howToMakeVideo">
                <VideoPlayer
                className="videoPlayer"  
                src="/images/videoplayback.mp4"
                playbackRates={[0.5, 1, 3.85, 16]}
                muted={false}
                />
            </div>
            </div>
            </div>
            </>
            )
        }
        </motion.div>
    )
}
export default RavyaProductPageLarge;