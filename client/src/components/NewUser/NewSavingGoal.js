import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./SetUp.scss";
import { UserArrow } from "../../shared/logo/Avatars";
function NewSavingGoal() {
  const [value, onChange] = useState(new Date());

  return (
    <div className=" full__container  container">
      <main className="container">
        <div className="row justify-content-center">
          <div className="steps col col-sm-2 col-md-4 col-lg-6 col-xl-4">
            <ul>
              <li>Step 0 Create Account</li>
              <li>Step 1 Determine Spending Budget</li>
              <li>
                <b>Step 2 SetUp Saving Goals</b>
              </li>
              <li>Step 3 Add Expense Categories</li>
            </ul>
          </div>
          <div className="col col-sm-10 col-md-4 col-lg-4 col-xl-2">
            <div className="setup__saving">
              <div className="signup__form">
                <div>
                  <h4>Set Up a Saving Goal</h4>
                  <p>
                    Are you saving for a laptop? A vacation? A nice date? You
                    can edit or add more saving goals later.{" "}
                  </p>
                  <b>What are you saving up for?</b>
                  <br></br>
                  <input></input>
                  <br></br>
                  <b>How much will it cost?</b>
                  <br></br>
                  <input></input>
                  <br></br>
                  <b>When do you want to reach your goal?</b>
                  <Calendar onChange={onChange} value={value} />
                  <Link className="arrow" to="/setup/categories">
                    <UserArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default NewSavingGoal;
