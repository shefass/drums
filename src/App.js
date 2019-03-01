import React, { Component } from "react";
import "./App.css";
import data from "./components/data/data";
import {Display} from "./components/Display.js";
import Button from "./components/Button.jsx";

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
   time = setTimeout(()=>this.setState({
      id: ""
    }), 1000);
    
  }

  handleKeyPress = (event) => {
    let idObject = data.filter(a => event.keyCode === a.keyCode);
    if (idObject.length > 0) {
      this.setState({
        id: idObject[0].id
      });
    }
  }

  handleKeyUp = () => {
    this.setState({
      id: ""
    });
  };

  render() {
    return (
      <div className="Wrapper">
        <div id="drum-machine">
          <div id="keyboard">
            {data.map(a => (
              <Button
                letter={a.id}
                key={a.id}
                id={this.state.id}
                name={a.name}
                sound={a.sound}
              />
            ))}
          </div>
          <div id="control">
            <div id="display">
              <Display id={this.state.id} />
            </div>
            <div id="text">
              <p>Push keyboard!!</p>
              <p>Or use your mouse.</p>
              <p>Here goes switches for control.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
