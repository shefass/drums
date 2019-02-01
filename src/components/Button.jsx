import React, { Component } from "react";
import PlayMusic from "./PlayMusic";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCapture: false
    };
  }
  onEnter = e => {
    this.setState({ hasCapture: true });
  };
  onLeave = e => {
    this.setState({ hasCapture: false });
  };

  render() {
    const styles = {
      backgroundColor: this.state.hasCapture ? "pink" : "yellow",
      color: this.props.letter === this.props.id && "blueviolet",
      height: this.props.letter === this.props.id && "70%",
      width: this.props.letter === this.props.id && "70%"
    };
    const padStyle = {};
    return (
      <div className="drum-pad" style={padStyle}>
        <div
          className="drum-item"
          id={this.props.letter}
          onPointerEnter={this.onEnter}
          onPointerLeave={this.onLeave}
          style={styles}
        >
          {this.props.letter === this.props.id && <PlayMusic id={this.props.id} />}
          {this.props.letter}
        </div>
      </div>
    );
  }
}

export default Button;
