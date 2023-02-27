import { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Testing",
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  }

  buttonClickHandler () {
    console.log(this.state);
  };

  render(){
    return (
      <div className="App">
        <Person name="Rutvik" age="19" />
        <button type="button" onClick={this.buttonClickHandler.bind(this)}>
          Click Me
        </button>
        <h1 className="Label">Testing</h1>
      </div>
    );
  };
}

export default App;
