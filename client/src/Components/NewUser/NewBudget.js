import { Link } from 'react-router-dom';
function NewBudget() {
    return (
        <div>
            <ul>
                <li>Step 0 Create Account</li>
                <li><b>Step 1 Determine Spending Budget</b></li>
                <li>Step 2 SetUp Saving Goals</li>
                <li>Step 3 Add Expense Categories</li>
            </ul>
            <div>
                <h1>How much are you willing to spend each month?</h1>
                <p>Knowing how much you can spend each month will allow us to help you budget for each month while helping you reach your savings goals.
                    Don’t worry, we won’t share this information with anyone. </p>
            </div>
            <div>
                <b>Monthly Spending Budget</b>
                <input type="number" id="newBudget"></input>
            </div>
            <Link className="btn btn-primary" to="/setup/goal">ARROW</Link>
        </div>
    );
}

export default NewBudget;