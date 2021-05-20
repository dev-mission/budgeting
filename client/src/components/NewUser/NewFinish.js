import { Link } from 'react-router-dom';
import { UserArrow } from '../../shared/logo/Avatars';
import "../../shared/style/SetUp.css";
function NewFinish (){
    return (
        <div className="setup">
            <div className="steps">
                <ul>
                    <li>Step 0 Create Account</li>
                    <li>Step 1 Determine Spending Budget</li>
                    <li>Step 2 SetUp Saving Goals</li>
                    <li>Step 3 Add Expense Categories</li>
                </ul>
            </div>
            <div className="background">
                <h2 className="setupFinish">Great, you’re ready to start budgeting and saving with Bulga!</h2>
                <Link className="arrow" to="/overview"><UserArrow /></Link>
            </div>
        </div>
    )
}
export default NewFinish;