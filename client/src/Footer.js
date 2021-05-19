import { BulgaLogo } from "./shared/logo/Avatars";

import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <BulgaLogo /><br />
            &copy; 2021 Bulga
          </div>
          <div className="col-md-6">
            <ul className="footer__nav nav flex-column">
              <li className="nav-item">
                <Link className="nav-link">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Terms &amp; Conditions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
