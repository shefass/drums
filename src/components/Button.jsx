import React, { Component } from "react";
import { PlayMusic } from "./PlayMusic";
import styled from "styled-components";

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
      <StyledDrumPad>
        <StyledDrumItem
          className="drum-item"
          id={letter}
          onPointerEnter={this.onEnter}
          onPointerLeave={this.onLeave}
          style={styles}
        >
          {letter === id && <PlayMusic id={id} />}
          {letter}
        </StyledDrumItem>
      </StyledDrumPad>
    );
  }
}

const StyledDrumPad = styled.div`
justify-content: center;
  align-items: center;
  display: flex;
`
const StyledDrumItem = styled.div`
border: 1px solid blueviolet;

  border-radius: 25px;
  height: 75%;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5em;
  box-shadow: 2px 2px;
`
export default Button;
