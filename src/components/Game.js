import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.game.id,
      name: props.game.name,
      genders: props.game.genders,
      released: props.game.released,
      rating: props.game.rating,
      screenshot: props.game.screenshot
    };
  }

  removeGame = () => {
    /**
     * This method will call the method sended in the props to lift up the data to parent component.
     * Which remove the Game from the parent state.
     */
    this.props.removeGame(this.state.id);
  };

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
          <Button onClick={this.removeGame}>Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Game;
