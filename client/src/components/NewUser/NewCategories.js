import { Link } from 'react-router-dom';
import React from 'react';
import "../../shared/style/SetUp.css";
import { UserArrow } from '../../shared/logo/Avatars';
function NewCategories (){

    

    return (
        <div className="setup">
            <div className="steps">
                <ul>
                    <li>Step 0 Create Account</li>
                    <li>Step 1 Determine Spending Budget</li>
                    <li>Step 2 SetUp Saving Goals</li>
                    <li><b>Step 3 Add Expense Categories</b></li>
                </ul>
            </div>
            <div className="form">
                <h4>
                    Add Expense Categories
                </h4>
                <p>These categories will help you see where you’re spending your money and 
                    will allow you to set specific budgets for specific parts of your life. </p>
                    <div className="newCategory">
                        <div>
                            <label>Category Name<input type="text" id="newCategories"></input></label>
                            <label>Limit<input type="text" id="newCategoriesLimit"></input></label>
                            <label>Color
                                <input type="checkbox"></input> Flexible Cost Category
                                <input type="checkbox"></input> Fixed Cost Category
                            </label>
                            <button>Add</button>
                        </div>
                        <div>
                            <p>Flexible Cost</p>
                                Shopping <input></input>
                                Groceries <input></input>
                                Entertainment <input></input>
                            <p>Fixed Cost</p>
                                Rent <input></input>
                                Loans <input></input>
                        </div>
                    </div>
                <Link to="/setup/done"><UserArrow /></Link>
            </div>
        </div>
    )
}
export default NewCategories;