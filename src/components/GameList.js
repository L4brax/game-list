import React from "react";
import Game from "./Game";
import { getGames } from "./../services/games";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loading: true
    };
  }

  componentDidMount() {
    getGames().then(games => {
      this.setState({ games });
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading...</div>}
        {this.state.games.map(game => (
          <li key={game.id}>
            <Game game={game} />
          </li>
        ))}
      </div>
    );
  }
}

export default GameList;
