import { Link } from 'react-router-dom';
function NewFinish (){
    return (
        <div>
            <ul>
                <li>Step 0 Create Account</li>
                <li>Step 1 Determine Spending Budget</li>
                <li>Step 2 SetUp Saving Goals</li>
                <li>Step 3 Add Expense Categories</li>
            </ul>
            <div>
                <h1>Great, you’re ready to start budgeting and saving with Bulga!</h1>
            </div>
            <Link className="btn btn-primary" to="/overview">ARROW</Link>
        </div>
    )
}
export default NewFinish;