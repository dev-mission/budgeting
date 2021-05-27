import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserArrow } from "../../shared/logo/Avatars";
import "./SetUp.scss";

function NewFinish() {
  const history = useHistory();

  return (
    <div className=" full__container container">
      <main className="container">
        <div className="row justify-content-center">
          <div className="steps col col-sm-2 col-md-4 col-lg-6 col-xl-4">
            <ul>
              <li>
                <b>Step 0 Create Account</b>
              </li>
              <li>Step 1 Determine Spending Budget</li>
              <li>Step 2 SetUp Saving Goals</li>
              <li>Step 3 Add Expense Categories</li>
            </ul>
          </div>
          <div className="col col-sm-10 col-md-6 col-lg-4 col-xl-2">
            <div className="background">
              <h2 className="setupFinish">
                Great, you’re ready to start budgeting and saving with Bulga!
              </h2>
              <div
                className="arrowNext"
                onClick={() => history.push("/overview")}
              >
                <UserArrow />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default NewFinish;
