import { Link } from 'react-router-dom';
import React from 'react';

function NewCategories (){

    

    return (

        <div>
            <ul>
                <li>Step 0 Create Account</li>
                <li>Step 1 Determine Spending Budget</li>
                <li>Step 2 SetUp Saving Goals</li>
                <li><b>Step 3 Add Expense Categories</b></li>
            </ul>
            <div>
                <h1>Add Expense Categories</h1>
                <p>These categories will help you see where you’re spending your money and 
                    will allow you to set specific budgets for specific parts of your life. </p>
            </div>
            <div>
                <form>
                    <div className="container">
                        <b>Category Name</b>
                        <input type="text" id="newCategories"></input><br></br>
                        <b>Limit</b>
                        <input type="text" id="newCategoriesLimit"></input><br></br>
                        <b>Color</b><br></br>
                        <input type="checkbox"></input> Flexible Cost Category <br></br>
                        <input type="checkbox"></input> Fixed Cost Category <br></br>
                        <button>Add</button>
                    </div>
                    <div>
                        <p>Flexible Cost</p>
                            Shopping <input></input><br></br>
                            Groceries <input></input><br></br>
                            Entertainment <input></input>
                        <p>Fixed Cost</p>
                            Rent <input></input><br></br>
                            Loans <input></input><br></br>
                    </div>
                </form>
            </div>
            <Link className="btn btn-primary" to="/setup/done">ARROW</Link>
        </div>
    )
}
export default NewCategories;