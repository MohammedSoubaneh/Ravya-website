import React from 'react';
import {motion} from 'framer-motion';

function RecipeRice () {
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    return(
        <motion.div className="recipeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            <div className="heroText">Ravya + Chickpea Curry</div>
            <div className="recipeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="instructionContainer">
                <div className="whatYouNeed">
                <p>What You Need</p>
                <ul>
                    <li>Basmatic Rice</li>
                    <br/>
                    <li>Olive Oil</li>
                    <br/>
                    <li>Cloves</li>
                    <br/>
                    <li>Bay leaf</li>
                    <br/>
                    <li>Cinnamon </li>
                    <br/>
                    <li>Yellow Onions</li>
                    <br/>
                    <li>One Sache of Ravya Turmeric Infusion</li>
                </ul>
                </div>
                <div className="foodImage"><img src="/images/RecipeRiceHero.jpg" /></div>
            </div>
            <div className="howToMakeContainer">
                <div className="howToMake">How To Make</div>
                <div className="instuctionOne">Soak 1 Cup of Basmati rice for atleast 10 minutes, wash and rinse it a few times. </div>
                <div className="instuctionOne">Add 1 tbsp of olive oil to your pot and set the heat to medium. As it's heating up cut and add in your onions in whichever way you like follow up with 2 clove, let it Saute for 10minutes at low/medium heat </div>
                <div className="instuctionOne">Add in rice and cook it for 2 minutes. Add in 2 cups boiling hot water </div>
                <div className="instuctionOne">Cut open your Ravya Sache and add it to you hot water. Let the rice absorb the water. Once water is almost finished lower the heat until the rest of water is gone. </div>
                <div className="instuctionOne">Lastly Enjoy! </div>
            </div>
            <div className="nextRecipe">
                <div className="readNext">Next Recipe</div>
                <div className="nameOfRecipe">Ravya + Ice Cream</div>
                <div className="nextImage"><img src="/images/RecipeTwo.jpg" /></div>
            </div>
        </motion.div>
    );
}

export default RecipeRice;