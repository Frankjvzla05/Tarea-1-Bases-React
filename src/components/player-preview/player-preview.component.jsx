import React from "react";

import InfoDataPlayer from "../info-data-player/info-data-player.component";

import "./player-preview.styles.css"

const PlayerPreview = ({ title, items }) => (
  <div className="player-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items        
        .map(({ id, ...otherItemProps }) => (
          <InfoDataPlayer key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PlayerPreview;
