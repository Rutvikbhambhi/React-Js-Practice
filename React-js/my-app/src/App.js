import { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Rutvik",
          age: 19,
        },
        {
          name: "Rahul",
          age: 21,
        },
        {
          name: "Vijay",
          age: 21,
        },
        {
          name: "Devayat",
          age: 20,
        }
      ]
      // demo: "Testing",
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler () {
    console.log(this.state);
  };

  render() {
    let persons;
    persons = this.state.persons.map((p, index) => {
      return <Person key={index} name={p.name} age={p.age}/>;
    });
    console.log(persons);
    return (
      <div className="App">
        {persons}

        {/* <Person 
          name={this.state.Person[0].name}
          age={this.state.Person[0].age}
        />
        <Person 
          name={this.state.Person[1].name}
          age={this.state.Person[1].age}
        />
        <Person 
          name={this.state.Person[2].name}
          age={this.state.Person[2].age}
        /> */}


        {/* <button type="button" onClick={this.buttonClickHandler.bind(this)}>
          Click Me
        </button>
        <h1 className="Label">Testing</h1> */}
      </div>
    );
  };
}

export default App;
