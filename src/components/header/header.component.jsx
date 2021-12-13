import React from "react";
import { Link } from "react-router-dom";
import logoFifa from "../../assets/fifa22-nav-logo.svg";
import "./header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="LogoFIFA" to="/">
        <img className="headerLogo" src={logoFifa} alt="logo" />
      </Link>
      <div className="optionPlayerPage">
        <Link className="option" to="/players">
          Ver jugadores
        </Link>
      </div>
    </div>
  );
};

export default Header;
