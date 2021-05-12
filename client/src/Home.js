import React, { useState, useEffect } from "react";
import { BulgaLogo } from "./shared/logo/Avatars";
import { Link } from "react-router-dom";

import "./shared/style/Home.css";
import Wallet from "./shared/pics/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash 1.png";
import PigCoin from "./shared/pics/undraw_Savings_re_eq4w (1).png";
import LadyMoney from "./shared/pics/undraw_investment_data_yfvt.png";

function Home() {
  return (
    <>
      <main>
        <header>
          <img className="background-pic" src={Wallet} alt="wallet" />
          <nav>
            <div className="logo col col-md-6">
              <Link to="/home">
                <BulgaLogo />
              </Link>
            </div>
            <ul className="col col-md-3">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/resource">Resource</Link>
              </li>
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>
            </ul>
            <div className="register col col-md-3">
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </nav>
        </header>
      </main>
      <main>
        <section>
          <div>
            <h3>What is Bulga</h3>
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
          <div>
            <img src={PigCoin} alt="a man holding a coin to pig" />
          </div>
        </section>
        <section>
          <div>
            <h3>How do I start a Budget</h3>
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
          <div>
            <img src={LadyMoney} alt="a lady holding some us dollars" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
