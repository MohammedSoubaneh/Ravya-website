import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function RecipeRice () {
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    return(
        <motion.div className="recipeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            <Helmet>
                <title>Ravya | Ravya + Rice</title>
            </Helmet>
            <div className="heroText">Ravya + Rice</div>
            <div className="recipeDescription">No one wants a heap full of bland, unflavored rice that dampens the experience of your entire
                    meal. So activate a variety of your senses through not only the consuming but preparation process
                    of Ravya Turmeric Rice. Although delicious on the pallet with savory flavors and a wholesome,
                    aromatic smell, the main attraction about the Ravya Turmeric Rice is how vibrant the dish is. Quick
                    and easy in preparation, this fluffed up rice dish is the visual element that was missing from your
                    tasty but dull looking buffet.</div>
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
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="nextImage"><Link to="/home/Recipe/IceCream"><img src="/images/RecipeTwo.jpg" /></Link></motion.div>
            </div>
        </motion.div>
    );
}

export default RecipeRice;