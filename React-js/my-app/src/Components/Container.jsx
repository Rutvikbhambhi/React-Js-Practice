import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { v4 as uuid4 } from 'uuid';
// uuidv4();
// import firebase from "firebase";
// import firebase from "firebase";



const { v4: uuidv4 } = require('uuid');
uuidv4();
const firebaseConfig = {
  apiKey: "AIzaSyCLcmOyxkovQb0PVWidw0xwVCsXpgP-H_5",
  authDomain: "ws-survey.firebaseapp.com",
  databaseURL: "https://ws-survey-default-rtdb.firebase",
  ProjectId: "ws-survey",
  StorageBucket: "ws-survey.appspot.com",
  MessagingSenderId: "542869075163",
  appId: "1:542869075163:web:9ed2a81e45ff8516d148fe", 
};
// if (firebase.app.length < 0) {
//   firebase.initializeApp(firebaseConfig);
// }
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid4(),
      name: null,
      email: null,
      question: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
      isSubmitted: false,
    };
  }

  detailsSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email });
    event.preventDefault();
    // alert();
  };

  questionSubmitHandler = (event) => {
    // console.log(event.targets);
    const question = {};
    question.q1 = event.target.q1.value;
    question.q2 = event.target.q2.value;
    question.q3 = event.target.q3.value;
    question.other = event.target.other.value;
    this.setState({ question });
    event.preventDefault();
    // const database = firebase.database();
    // database.ref("survey/"+ this.state.id).set({
    //   name: this.state.name,
    //   email: this.state.email,
    //   questions: this.state.questions,
    // });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">Tech Survey</h1>
          </div>
        </div>

        {this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsSubmitHandler} />
        ) : (
          <Question submit={this.questionSubmitHandler} />
        )}
      </>
    );
  }
}

export default Container; 
