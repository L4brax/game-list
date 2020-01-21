import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Game;
