import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { BulgaLogo, BulgoFooter } from "./shared/logo/Avatars";
import { Link } from "react-router-dom";

import "./shared/style/Home.css";
import PigCoin from "./shared/pics/undraw_Savings_re_eq4w (1).png";
import LadyMoney from "./shared/pics/undraw_investment_data_yfvt.png";

function Home({ setPath }) {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  const handleLoginBtn = () => {
    history.push("/login");
  };
  const handleSignUpBtn = () => {
    history.push("/register");
  };

  return (
    <div class="homeContainer">
      <main className="topMain">
        <div className="title">
          <div className="titleHeading">Welcome to Bulga.</div>
          <div className="titleSubHeading">
            Simple budgeting to kickstart your savings
          </div>
        </div>
        <header>
          <nav className="navigation">
            <div className="logo col col-md-6">
              <Link to="/home">
                <BulgaLogo />
              </Link>
            </div>
            <ul className="col col-md-3">
              <li>
                <Link className="firstLink link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/resource">
                  Resource
                </Link>
              </li>
              <li>
                <Link className="link" to="/FAQ">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="register col col-md-3">
              <button
                onClick={handleLoginBtn}
                id="login"
                className="btn btn-primary"
              >
                Login
              </button>
              <button
                onClick={handleSignUpBtn}
                id="signUp"
                className="btn btn-primary"
              >
                Sign up
              </button>
            </div>
          </nav>
        </header>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-caret-down"
        viewBox="0 0 16 16"
        className="downIcon"
      >
        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
      </svg>
      <main className="bottomMain">
        <section className="topSection">
          <div className="leftPart col-md-5">
            <h2>What is Bulga</h2>
            <p className="bulgaDesc">
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
          <div className="offset-2 col-md-6">
            <img
              src={PigCoin}
              alt="a man holding a coin to pig"
              width="350px"
              className="pigPic"
            />
          </div>
        </section>
        <section className="bottomSection">
          <div className="rightPart col-md-5">
            <h3>How do I start a Budget</h3>
            <p className="bulgaDesc">
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
          <div className="offset-2 col-md-6">
            <img
              src={LadyMoney}
              alt="a lady holding some us dollars"
              width="350px"
              className="ladyPic"
            />
          </div>
        </section>
      </main>
      <footer className="footerContainer">
        <div className="footerLogo">
          <BulgaLogo />
          <BulgoFooter />
        </div>
        <ul className="footerNav">
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms & Conditions</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
