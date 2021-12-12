import React from "react";
import "./info-data-player.styles.css"

const InfoDataPlayer = ({ league, name, imageUrl, club }) => (
  <div className="player-item">
  <img src={imageUrl} alt={`player-${name}`} />
    <div className="player-footer">
      <h3 className="name">{`${name}`}</h3>
      <h3 className="league">{`Liga: ${league}`}</h3>
      <h3 className="club">{`Club: ${club}`}</h3>

    </div>
  </div>
);

export default InfoDataPlayer;
