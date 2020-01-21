import React from "react";
import Card from "react-bootstrap/Card";

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
      <Card style={{ marginBottom: "10px" }}>
        <Card.Img variant="top" src={this.state.screenshot} />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.state.genders.toString().replace(",", " ")}
          </Card.Subtitle>
          <Card.Text>
            {this.state.released} - Rating : {this.state.rating}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Game;
