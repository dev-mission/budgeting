import { Link } from 'react-router-dom';
import "../../shared/style/SetUp.css";
function NewFinish (){
    return (
        <div className="wrapper">
            <div className="steps">
                <ul>
                    <li>Step 0 Create Account</li>
                    <li>Step 1 Determine Spending Budget</li>
                    <li>Step 2 SetUp Saving Goals</li>
                    <li>Step 3 Add Expense Categories</li>
                </ul>
            </div>
            <div className="background">
                <h2>Great, you’re ready to start budgeting and saving with Bulga!</h2>
                <Link className="btn btn-primary" to="/overview">ARROW</Link>
            </div>
        </div>
    )
}
export default NewFinish;