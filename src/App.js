import React from "react";
import GameList from "./components/GameList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Game List</header>
        <GameList />
      </div>
    );
  }
}

export default App;
