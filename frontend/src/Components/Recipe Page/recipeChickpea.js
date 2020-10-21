import React from 'react';
import {motion} from 'framer-motion';

function RecipeChickpea () {
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    return(
        <motion.div className="recipeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            <div className="heroText">Ravya + Chickpea Curry</div>
            <div className="recipeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="instructionContainer">
                <div className="whatYouNeed">
                <p>What You Need</p>
                <ul>
                    <li>1 tbsp extra virgin olive oil</li>
                    <br/>
                    <li>2 cloves of garlic, chopped</li>
                    <br/>
                    <li>1/2 onion, chopped</li>
                    <br/>
                    <li>1-inch piece of ginger root (about 2.5 cm), chopped</li>
                    <br/>
                    <li>1 tsp curry powder</li>
                    <br/>
                    <li>1 tsp ground cumin</li>
                    <br/>
                    <li>1 Sache of Ravya Turmeric Infusion</li>
                    <br/>
                    <li>1/2 tsp ground coriander</li>
                    <br/>
                    <li>1/4 tsp ground black pepper</li>
                    <br/>
                    <li>1 15-ounce can of chickpeas soaked (425g)</li>
                    <br/>
                    <li>1 can of full-fat coconut milk (400 ml)</li>
                    <br/>
                    <li>2 tbsp tomato paste</li>
                    <br/>
                    <li>1/2 tsp salt</li>
                </ul>
                </div>
                <div className="foodImage"><img src="/images/RecipeHeroChickpea.jpg" /></div>
            </div>
            <div className="howToMakeContainer">
                <div className="howToMake">How To Make</div>
                <div className="instuctionOne">Heat the oil in a large pot and cook the garlic, onion, and ginger over medium-high heat for 5 to 10 minutes or until golden brown, stirring occasionally.  </div>
                <div className="instuctionOne">Add the spices (curry, cumin, Ravya Sache, coriander, black pepper), stir, and cook for 1 to 2 more minutes. </div>
                <div className="instuctionOne">Add the chickpeas, coconut milk, tomato paste, and salt. Stir and cook for about 10 minutes, stirring occasionally. </div>
                <div className="instuctionOne">Let it simmer for 20minutes, and Enjoy ! </div>
            </div>
            <div className="nextRecipe">
                <div className="readNext">Next Recipe</div>
                <div className="nameOfRecipe">Ravya + Rice</div>
                <div className="nextImage"><img src="/images/RecipeThree.jpg"/></div>
            </div>
        </motion.div>
    );
}

export default RecipeChickpea;