import React, {useRef, useEffect} from 'react';
import { gsap, Power3 } from  'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

function Recipe () {
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    return(
        <motion.div className="recipeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            <div className="heroText">Ravya + Chickpea Curry</div>
            <div className="recipeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="instructionContainer">
                <div className="whatYouNeed">
                <ul>
                    <p>What You Need</p>
                    <li>Lorem ipsum dolor sit amet</li>
                    <br/>
                    <li>Lorem ipsum</li>
                    <br/>
                    <li>Lorem ipsum</li>
                    <br/>
                    <li>Lorem ipsum</li>
                    <br/>
                    <li>Lorem ipsum</li>
                </ul>
                </div>
                <div className="foodImage"></div>
            </div>
            <div className="howToMakeContainer">
                <div className="howToMake">How To Make</div>
                <div className="instuctionOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div className="instuctionOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div className="instuctionOne">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
            <div className="nextRecipe">
                <div className="readNext">Next Recipe</div>
                <div className="nameOfRecipe">Lorem ipsum dolor sit amet, consectetur</div>
                <div className="nextImage"><img /></div>
            </div>
        </motion.div>
    );
}

export default Recipe;