import React from 'react';

function RavyaProductPageSmall(){
    return (
        <div className="largeHeroContainer">
            <div className="largeHeroInner">
                <div className="heroImageSmall"></div>
                <div className="productImageSmall">
                <div className="productText">
                    <h1>For Your Health</h1>
                    <h2>Turmeric Infusion</h2>
                    <p className="price">$4.99</p>
                    <p className="delivery">Delivery Info</p>
                    <p className="addToCart">Buy Now</p>
                </div>
                </div>
            </div>
            <div className="brillianCup">How to Make a Brilliant Cut Of Ravya</div>
            <div className="howToMakeContainer">
            <div className="howToMakeInner">
                    <div className="stepOneTitle">Step One</div>
                    <div className="stepOneInstruction">Boil any plant based milk to 180 F (80 C).</div>
                    <div className="stepTwoTitle">Step Two</div>
                    <div className="stepTwoInstruction">Place one infusion bag in a cup. Add 150ml of boiled milk to your cup.</div>
                    <div className="stepThreeTitle">Step Three</div>
                    <div className="stepThreeInstruction">Dip the Infusion a few times and allow it to infuse for 3-4 minutes. Add Sweeteners as per your taste and Enjoy!</div>
            </div>
            <div className="howToMakeVideo"></div>
            </div>
        </div>
    )
}
export default RavyaProductPageSmall;