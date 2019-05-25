import React, { Component } from "react";
import data from "./components/data/data";
import { Display } from "./components/Display.js";
import Button from "./components/Button.jsx";
import styled from "styled-components";

var time;
class App extends Component {
  state = {
    id: ""
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
    this.unsubscribeMouseDown = data.map(a =>
      document.getElementById(a.id).addEventListener("mousedown", this.click)
    );
    this.unsubscribeMouseUp = data.map(a =>
      document.getElementById(a.id).addEventListener("mouseup", this.clickEnd)
    );
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
    this.unsubscribeMouseDown();
    this.unsubscribeMouseUp();
  }

  click = event => {
    clearTimeout(time);
    this.setState({
      id: event.srcElement.id
    });
  };

  clickEnd = () => {
    time = setTimeout(
      () =>
        this.setState({
          id: ""
        }),
      1000
    );
  };

  handleKeyPress = event => {
    let idObject = data.filter(a => event.keyCode === a.keyCode);
    if (idObject.length > 0) {
      this.setState({
        id: idObject[0].id
      });
    }
  };

  handleKeyUp = () => {
    this.setState({
      id: ""
    });
  };

  render() {
    return (
      <StyledAppsWarpper>
        <StyledDrumMachine>
          <StyledKeyboard>
            {data.map(a => (
              <Button
                letter={a.id}
                key={a.id}
                id={this.state.id}
                name={a.name}
                sound={a.sound}
              />
            ))}
          </StyledKeyboard>
          <StyledControl>
            <StyledDisplayWrapper>
              <Display id={this.state.id} />
            </StyledDisplayWrapper>
            <StyledText>
              <p>Push keyboard!!</p>
              <p>Or use your mouse.</p>
              <p>Here goes switches for control.</p>
            </StyledText>
          </StyledControl>
        </StyledDrumMachine>
      </StyledAppsWarpper>
    );
  }
}

const StyledDisplayWrapper = styled.div`
  border: 3px solid rgb(80, 83, 73);
  background-color: rgb(187, 144, 228);
  border-radius: 25px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  margin: 4% 4% 4% 0%;
  @media (max-height: 400px) {
    font-size: 1.5em;
  }
  @media (max-width: 450px) {
    font-size: 1.5em;
  }
`;
const StyledAppsWarpper = styled.div`
  box-sizing: border-box;
  background-color: azure;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDrumMachine = styled.div`
  border: 2px solid blueviolet;
  background-color: blueviolet;
  border-radius: 25px;
  height: 60%;
  min-width: 35em;
  display: flex;
  @media (max-width: 750px) {
    height: 75%;
  }
  @media (max-width: 450px) {
    height: 70%;
    min-width: 300px;
  }
`;
const StyledKeyboard = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
`;

const StyledControl = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledText = styled.div`
  height: 70%;
  font-size: 1.3em;
  @media (max-height: 400px) {
    font-size: 1em;
  }
`;
export default App;
