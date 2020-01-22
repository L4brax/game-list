import React from "react";
import Game from "./Game";
import { getGames } from "./../services/games";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "react-bootstrap/Spinner";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      loading: true
    };
  }

  /** Method called here wil execute only after render, avoiding endless loop. */
  componentDidMount = () => {
    getGames().then(games => {
      this.setState({ games });
      this.setState({ loading: false });
    });
  };

  /** This will remove a selected game from the state by its id */
  removeGame = id => {
    this.setState(prevState => ({
      games: prevState.games.filter(game => game.id !== id)
    }));
  };

  render() {
    return (
      <div>
        {this.state.loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <CardColumns>
          {this.state.games.map(game => (
            <Game game={game} key={game.id} removeGame={this.removeGame} />
          ))}
        </CardColumns>
      </div>
    );
  }
}

export default GameList;
