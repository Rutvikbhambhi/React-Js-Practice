import { Component } from "react";
import "./App.css";
// import Person from "./Components/Person/Person";
// import Form from "./Components/Form";  
import ControlledComponent from "./Components/ControlledComponent";
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
      ],
      isShow: true,
      // demo: "Testing",
    };
    // this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  buttonClickHandler () {
    console.log(this.state);
  };

  toggleHandler(){
    this.setState({ isShow: !this.state.isShow });
    // alert("")
  }

  removeHandler = (personIndex) => {
    const personsCopy = this.state.persons;
    // console.log(personsCopy);
    personsCopy.splice(personIndex, 1);
    // console.log (personsCopy); 
    this.setState({ persons: personsCopy });
  };

  render() {
    let persons;
    if(this.state.isShow){ 
      persons = this.state.persons.map((p, index) => {
        // return <Person key={index} name={p.name} age={p.age} remove={() => this.removeHandler(index)}/>;
      });
    } else {
        persons = "";
    }
    // console.log(persons);
    return (
      <div className="App">
        {/* <button onClick={this.toggleHandler}>Toggle</button> */}
        {persons}

        {/* <Form /> */}
        <ControlledComponent />

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
