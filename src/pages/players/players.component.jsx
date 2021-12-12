import React from "react";

import PLAYERS_DATA from "./players.data";

import PlayerPreview from "../../components/player-preview/player-preview.component";
import "./players.styles.css"

class PlayersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: PLAYERS_DATA,
    };
  }
  
  render() {
    const { players } = this.state;
    return (
      <div className="player-page">
        {players.map(({ id, ...otherPlayersProps }) => (
          <PlayerPreview key={id} {...otherPlayersProps} />
        ))}
      </div>
    );
  }
}

export default PlayersPage;
