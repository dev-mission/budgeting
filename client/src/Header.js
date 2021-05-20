import { useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import classNames from "classnames";

import Api from "./Api";
import { useAuthContext } from "./AuthContext";

import { BulgaLogo, UserIcon } from "./shared/logo/Avatars";
import "./Header.scss";

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { user, setUser } = useAuthContext();

  useEffect(
    function () {
      Api.users.me().then((response) => {
        if (response.status === 204) {
          setUser(null);
        } else {
          setUser(response.data);
        }
      });
    },
    [setUser]
  );

  const onLogout = async function (event) {
    event.preventDefault();
    await Api.auth.logout();
    setUser(null);
    history.push("/");
  };

  return (
    <nav
      className={classNames(
        "navbar navbar-expand-md header",
        location.pathname === "/" ? "header--home" : "fixed-top"
      )}
    >
      <div className="container">
        <Link className="navbar-brand bulgaLogoMargin" to="/">
          <BulgaLogo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navBarPostion"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/overview">
                    Monthly Overview
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/budget-saving-goals"
                  >
                    Budget & Saving Goals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/expenses">
                    Expenses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/spending-history"
                  >
                    Spending History
                  </Link>
                </li>
              </>
            )}
            <div className="flex-grow-1 d-flex justify-content-end">
              {!user && (
                <>
                  <li className="nav-item">
                    <Link
                      className={classNames("nav-link", {
                        active: location.pathname === "/",
                      })}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={classNames("nav-link", {
                        active: location.pathname === "/resourcedemo",
                      })}
                      to="/resourcedemo"
                    >
                      Resource
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={classNames("nav-link", {
                        active: location.pathname === "/FAQ",
                      })}
                      to="/FAQ"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <UserIcon /> Log in
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/logout" onClick={onLogout}>
                    <UserIcon /> Log Out
                  </a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
