import React from "react";

const BudgetGoals = () => {
    return (
        <div>
            <div>
                <h1>Budget</h1>
                <div>
                    <label for="budget">How much are you willing to spend each month?</label>
                    <input type="number" id="budget" name="budget" />
                </div>
            </div>
            <div>
                <h1>Saving Goals (Recommend)</h1>
                <div>
                    <label for="goalName">What are you saving for?</label>
                    <input type="text" name="goalName" id="goalName" />
                </div>
                <div>
                    <label for="goalCost">How much does it cost?</label>
                    <input type="number" name="goalCost" id="goalCost" />
                </div>
                <div>
                    <label for="goalDate">When do you want to buy it?</label>
                    <input type="date" name="goalDate" id="goalDate" />
                </div>
                
            </div>
            
        </div>
    )
}

export default BudgetGoals;