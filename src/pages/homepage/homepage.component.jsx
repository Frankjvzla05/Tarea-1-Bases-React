import React from "react";
import "./homepage.styles.css";
import { Link } from "react-router-dom";
import homeImg from "../../assets/f22-ratings-tarea.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="homeImg" src={homeImg} alt="homeImg" />

      <div className="infoText">
        <p>Valoraciones de FIFA 22</p>
        <div className="optionPlayerPage">
          <Link className="option" to="/players">
            Ver jugadores
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
