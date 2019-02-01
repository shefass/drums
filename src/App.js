import React, { Component } from "react";
import "./App.css";
import data from "./components/data/data";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";

var time;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    data.map(a =>
      document.getElementById(a.id).addEventListener("mousedown", this.click)
    );
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress); // remove this same event
    //listener.It's good practice to use this lifecycle method to do any clean up on
    //React components before they are unmounted and destroyed. Removing event listeners is
    //an example of one such clean up action.
    data.map(a =>
      document.getElementById(a.id).removeEventListener("click", this.click)
    );
  }

  click = event => {
    time = setTimeout(this.timeOut, 1000);

    this.setState({
      id: event.srcElement.id
    });
  };

  //setTimeout(this.timeOut, 1000); we need to reset state
  timeOut = () => {
    this.setState({
      id: ""
    });
    clearTimeout(time);
  };

  handleKeyPress(event) {
    let idObject = data.filter(a => event.keyCode === a.keyCode);
    time = setTimeout(this.timeOut, 1000);

    if (idObject.length > 0) {
      this.setState({
        id: idObject[0].id
      });
    }
  }

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
