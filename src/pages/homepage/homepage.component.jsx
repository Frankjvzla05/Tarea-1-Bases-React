import React from "react";
import "./homepage.styles.css";
import homeImg from "../../assets/f22-ratings-hub-bg-xl.jpg.adapt.1920w.jpg";

const HomePage = () => {
  return (
    <div className="homepage">
      <img className="homeImg" src={homeImg} alt="homeImg" />

      <div className="infoText">
        <p>Valoraciones de FIFA 22</p>
      </div>
    </div>
  );
};

export default HomePage;
