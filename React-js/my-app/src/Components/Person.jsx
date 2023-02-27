import React, { Component } from 'react';
// import Man from './Man';

class Person extends Component {
//    constructor(props) {
//         super(props)
//    }
   render() {
    // return(
    //     <div>
    //         <h1>Name:</h1><h2>Rutvik</h2>
    //     </div>
    // )
    return React.createElement(
        "div",
        { class: "App-header" },
        React.createElement(
            "h1",
            null,
            React.createElement("i", null, "Rutvik")
        )
    )
   }
}

export default Person;