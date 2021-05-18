import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import "./Home.scss";
import PigCoin from "./shared/pics/undraw_Savings_re_eq4w (1).png";
import LadyMoney from "./shared/pics/undraw_investment_data_yfvt.png";

function Home() {
  return (
    <main className="home">
      <section className="home__top">
        <h1 className="display-1">Welcome to Bulga.</h1>
        <h3>Simple budgeting to kickstart your savings</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
          className="home__down-icon"
        >
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </section>
      <section className="container home__section">
        <div className="row">
          <div className=" offset-1 col-md-4">
            <h2>What is Bulga</h2>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
              condimentum tempus diam, ultricies sollicitudin erat facilisis
              eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus
              eget elementum ligula, vitae pharetra quam. Nullam at ligula sed
              metu. Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
              Nam condimentum tempus diam, ultricies sollicitudin erat facilisis
              eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus
              eget elementum ligula, vitae pharetra quam. Nullam at ligula sed
              metu
            </p>
          </div>
          <div className="offset-2 col-md-5">
            <img
              src={PigCoin}
              alt="a man holding a coin to pig"
              width="350px"
              className="pigPic"
            />
          </div>
        </div>
      </section>
      <section className="container home__section">
        <div className="row">
          <div className="offset-1 col-md-4">
            <h2>How do I start a Budget</h2>
            <p>
              Budget is a financial plan for a defined period. Having a budget
              plan can prevent you from going into debt or overspending and
              ensure you will always have money for the things you need. First,
              calculate the amount of money you are willing to spend each month
              and then spread out to how many categories you feel like you might
              need. This will create a mindset of don’t want to go over the
              limit when it comes on daily basis. Overtime, you’ll see the
              amazing progress of how much you saved just by following the
              budget plan.
            </p>
          </div>
          <div className="offset-2 col-md-5">
            <img
              src={LadyMoney}
              alt="a lady holding some us dollars"
              width="350px"
              className="ladyPic"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
