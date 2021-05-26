import { Link } from 'react-router-dom';
import React from 'react';
import { UserArrow } from '../../shared/logo/Avatars';
import './NewCategories.scss';
function NewCategories() {
    return (
        <div className="categoriesSteps">
            <div className="row">
                <div className="col steps col-sm-10 col-md-8 col-lg-6 col-xl-5">
                    <ul>
                        <li>Step 0 Create Account</li>
                        <li>Step 1 Determine Spending Budget</li>
                        <li>Step 2 SetUp Saving Goals</li>
                        <li><b>Step 3 Add Expense Categories</b></li>
                    </ul>
                </div>
                <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-7">
                        <div className="row categoriesForm">
                            <div className="col-6">
                                <h4>Add Expense Categories</h4>
                                <p>These categories will help you see where you’re spending your money and
                                        will allow you to set specific budgets for specific parts of your life. </p>
                                <div className="col-6">
                                    <div>
                                        <label>Category Name<input type="text" id="newCategories" /></label>
                                        <label>Limit<input type="text" id="newCategoriesLimit" /></label>
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
                            </div>
                        </div>
                    <Link to="/setup/done"><UserArrow /></Link>
                </div>
            </div>
        </div>
    )
}
export default NewCategories;