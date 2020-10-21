import React from 'react';
import {motion} from 'framer-motion';

function RecipeIceCream () {
    const transitionDelay = { delay: 1, duration: 2, ease: [0.6, 0.01, -0.1, 0.96] };
    return(
        <motion.div className="recipeContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transitionDelay}>
            <div className="heroText">Ravya + Chickpea Curry</div>
            <div className="recipeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="instructionContainer">
                <div className="whatYouNeed">
                <p>What You Need</p>
                <ul>
                    <li>3 cups coconut milk</li>
                    <br/>
                    <li>½ cup cream of coconut</li>
                    <br/>
                    <li>One 1-inch piece ginger, thinly sliced</li>
                    <br/>
                    <li>¼ cup honey, plus more for garnish</li>
                    <br/>
                    <li>2 teaspoons ground turmeric</li>
                    <br/>
                    <li>½ teaspoon ground cinnamon</li>
                    <br/>
                    <li>½ teaspoon kosher salt</li>
                    <br/>
                    <li>¼ teaspoon ground cardamom</li>
                    <br/>
                    <li>¼ teaspoon freshly ground black pepper</li>
                    <br/>
                    <li>1 vanilla bean, seeds scraped</li>
                    <br/>
                    <li>Chopped candied ginger, for garnish</li>
                </ul>
                </div>
                <div className="foodImage"><img src="/images/RecipeIceCreamHero.jpg" /></div>
            </div>
            <div className="howToMakeContainer">
                <div className="howToMake">How To Make</div>
                <div className="instuctionOne">In a medium saucepan, whisk together all the ingredients, minus the candied ginger, and bring to a simmer over medium heat. Let cool completely, then refrigerate overnight. Make sure you freeze the bowl of an ice cream maker during this time. </div>
                <div className="instuctionOne">The next day, strain the base into the bowl of the ice cream maker and churn according to the manufacturer's directions. Scrape into a shallow dish and freeze for at least 4 hours. Scoop the ice cream into bowls and drizzle with honey. Garnish with chopped candied ginger, then serve. </div>
                <div className="instuctionOne">Lastly Enjoy! </div>
            </div>
            <div className="nextRecipe">
                <div className="readNext">Next Recipe</div>
                <div className="nameOfRecipe">Ravya + Chickpea Curry</div>
                <div className="nextImage"><img src="/images/RecipeOne.jpg"/></div>
            </div>
        </motion.div>
    );
}

export default RecipeIceCream;