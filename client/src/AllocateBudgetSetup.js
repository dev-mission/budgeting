import { propertyOf } from 'lodash';
import React from 'react';
function moneyApi() {
    let dollarAmount = ["3.00", "6.00", "9.00", "15.00", "5.00", "100.00", "500.00", "10.00"];

    return dollarAmount[Math.floor(Math.random() * dollarAmount.length)];
}
function categoryName() {
    let categories = ["Shopping", "Food/Drink", "Entertainment", "Gas", "Loans"];
    return categories[Math.floor(Math.random() * categories.length)];
}

function colorAPI() {
    let colors = ["red", "blue", "magenta", "pink", "black", "grey"];

    return colors[Math.floor(Math.random() * colors.length)];
}
function AllocateBudgetSetup() {

    return (
        <div className="budgetAllocationStuff container">
            <div className="progressBar">
                <nav> this is where the progress bar is going to be</nav>
            </div>

            <h1>Setting Your Monthly Budget Categories</h1>
            <div>
                <h6>Set your own Monhtly Budget</h6>
                {/* will become modular just adding space to get a look of how this is going to look */}
                <div className="budgetAllocationBoxes" style={{ width: "18rem" }}>
                    {/* contianer will be duplicated for how ever many are needed */}
                    <div className="card containerName">
                        <div className="card-body" style={{ backgroundColor: colorAPI() }}>
                            <h5 className="card-title" >{categoryName()}</h5>
                            <div className="card-text valueHolder"> ${moneyApi()}</div>
                        </div>
                    </div>
                    <div className="card containerName">
                        <div className="card-body" style={{ backgroundColor: colorAPI() }}>
                            <h5 className="card-title" >{categoryName()}</h5>
                            <div className="card-text valueHolder"> ${moneyApi()}</div>
                        </div>
                        <div className="card containerName">
                            <div className="card-body" style={{ backgroundColor: colorAPI() }}>
                                <h5 className="card-title" >{categoryName()}</h5>
                                <div className="card-text valueHolder"> ${moneyApi()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AllocateBudgetSetup;