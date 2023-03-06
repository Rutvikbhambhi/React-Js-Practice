import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ name, email }, () => {
      console.log(this.state);
    });
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
    this.setState({ question }, () => {
      console.log(this.state);
    });
    event.preventDefault();
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
