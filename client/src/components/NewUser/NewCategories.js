import { Link } from "react-router-dom";
import React from "react";
import { UserArrow } from "../../shared/logo/Avatars";
import "./NewCategories.scss";
import ExampleCategory from "../../shared/pics/fixed.png";
import CategoryForm from "../category/CategoryForm";
function NewCategories() {
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
            <div className="right__container">
              <div className="form__container">
                <h4 className="form__title">Add Expensive Categories.</h4>
                <p className="form__subtitle">
                  These categories will help you see where you are spending your
                  money and will allow you to set specific budgets for a
                  specific parts of your life.
                </p>
              </div>
              <div className="form form__container">
                <CategoryForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default NewCategories;
