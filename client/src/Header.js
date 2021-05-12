import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Api from "./Api";
import { useAuthContext } from "./AuthContext";

import { BulgaLogo, UserIcon } from "./shared/logo/Avatars";
import "./shared/style/Header.css";

function Header() {
  const history = useHistory();
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
    <nav className=" navigationColor navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand bulgaLogoMargin" to="/overview">
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
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/overview">
                Monthly Overview
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                aria-current="page"
                to="/budget-saving-goals"
              >
                Budget & Saving Goals
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/expensives">
                Expenses
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                aria-current="page"
                to="/spending-history"
              >
                Spending History
              </Link>
            </li>
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/logout" onClick={onLogout}>
                    <UserIcon /> Log Out
                  </a>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <UserIcon /> Log in
                  </Link>
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
