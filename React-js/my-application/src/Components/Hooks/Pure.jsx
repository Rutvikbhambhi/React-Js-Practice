import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.warn("check-re-rendering");
        return (
            <div>
                <h1>PureComponent {this.state.count}</h1>
                <button onClick={() => this.setState({ 
                    count: this.state.count+1 })}>
                    Update Count
                </button>
            </div>
        )
    }
}

export default Pure;