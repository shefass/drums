import React, { Component } from "react";
import { PlayMusic } from "./PlayMusic";

class Button extends Component {
  state = {
    hasCapture: false
  };

  onEnter = e => {
    this.setState({ hasCapture: true });
  };
  onLeave = e => {
    this.setState({ hasCapture: false });
  };

  render() {
    const { letter, id } = this.props;
    const styles = {
      backgroundColor: this.state.hasCapture ? "pink" : "yellow",
      color: letter === id && "blueviolet",
      height: letter === id && "70%",
      width: letter === id && "70%"
    };

    return (
      <div className="drum-pad">
        <div
          className="drum-item"
          id={letter}
          onPointerEnter={this.onEnter}
          onPointerLeave={this.onLeave}
          style={styles}
        >
          {letter === id && <PlayMusic id={id} />}
          {letter}
        </div>
      </div>
    );
  }
}

export default Button;
