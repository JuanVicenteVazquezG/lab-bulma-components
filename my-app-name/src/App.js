import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button isSmall isDanger className="is-rounded my-class">
          Danger
        </Button>
        <Button isSmall isSuccess>
          Success
        </Button>

        <Button isSmall isWarning className="is-rounded my-class">
          Warning!!
        </Button>
        <Button isSmall isPrimary>
          Primary
        </Button>

        <Button isSmall isPrimary isLarge>
          Large
        </Button>
      </div>
    );
  }
}

export default App;
