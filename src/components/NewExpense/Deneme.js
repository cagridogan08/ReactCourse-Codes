import { Component } from "react";
import React from "react";

export class Deneme extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, expenses: [] };
  }
  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render=()=> {
    return (
      <div>
        <button onClick={this.updateCounter} className="btn btn-primary"> {this.state.counter}</button>
        <br />
        <label>Current Value:{this.state.counter}</label>
      </div>
    );
  }
}
