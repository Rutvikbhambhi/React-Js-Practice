import React, { Component } from 'react';
import PersonStyle from "./person.module.css";

class Person extends Component {
   constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            name: "John",
            age: 22,
        };
    }
    nameChangeHandler() {
        // alert("How Are You")
        console.log(this.state);
        this.setState({name: "Rahul", age: 22},() => {
            console.log(this.state);
        })
    }
   render() {
    const style = {
        fontSize: "40px",
        color: "red",
    };
    return(
        <div className={PersonStyle.PersonBox}>
            <h1>
                <label className='PersonLabel'>Name</label> :{" "}
                <i>{this.props.name}</i>
                <br />
                <label style={style}>Age</label> :
                <i style={{color: "blue",}}>{this.props.age}</i>
                {/* <button onClick={this.nameChangeHandler.bind()}>Click Me</button> */}
            </h1>
        </div>
    )   
   }
}

export default Person;