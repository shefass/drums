import data from "./data/data";
import React, { Component } from "react";

class PlayMusic extends Component {
 

  render() {
    const obj = data.filter(v => v.id === this.props.id);
    return <audio src={obj[0].sound} autoPlay />;
  }
}

export default PlayMusic;
