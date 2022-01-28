import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link to="/hatspage" className="option">
        hatspage
      </Link>
      <Link to="/shoppage" className="option">
        shop page
      </Link>
      <Link to="/example" className="option">
        Example
      </Link>
    </div>
  </div>
);
export default Header;
