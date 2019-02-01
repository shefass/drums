import data from "./data/data";
import React, { Component } from "react";

class Display extends Component {
  render() {
    if (this.props.id === "") {
      return "Saund name";
    }
    const obj = data.filter(v => v.id === this.props.id);
    return <p>{obj[0].name}</p>;
  }
}

export default Display;
