import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        email: null,
        isSubmitted: false,
    };
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">Tech Survey</h1>
          </div>
        </div>

        <Details />
        <Question />

      </>
    );
  }
}

export default Container;
