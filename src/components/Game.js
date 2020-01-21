import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.game.name,
      genders: props.game.genders,
      released: props.game.released,
      rating: props.game.rating,
      screenshot: props.game.screenshot
    };
  }

  render() {
    return (
      <div>
        {this.state.name} - {this.state.genders.toString()}
      </div>
    );
  }
}

export default Game;
