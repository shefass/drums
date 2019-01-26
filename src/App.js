import React, { Component } from "react";
import "./App.css";
import metal from "./sounds/metalscrape.wav";
import pianoC from "./sounds/pianoCsh.wav";
import pianoF from "./sounds/pianoFminor.wav";
import pianoL from "./sounds/pianoLid.wav";
import pianoN from "./sounds/pianoNot.mp3";
import teddy from "./sounds/TeddyFrost.wav";
import tombola from "./sounds/tombola.wav";
import bongo from "./sounds/bongo.wav";
import blip from "./sounds/blip.wav";

const data = [
  { id: "q", keyCode: 81, name: "Metal", sound: metal },
  { id: "w", keyCode: 87, name: "Piano C", sound: pianoC },
  { id: "e", keyCode: 69, name: "Piano F Minor", sound: pianoF },
  { id: "a", keyCode: 65, name: "Piano Lid Closing", sound: pianoL },
  { id: "s", keyCode: 83, name: "Piano N", sound: pianoN },
  { id: "d", keyCode: 68, name: "Teddy Frost", sound: teddy },
  { id: "z", keyCode: 90, name: "Tombola", sound: tombola },
  { id: "x", keyCode: 88, name: "Bongo", sound: bongo },
  { id: "c", keyCode: 67, name: "Blip", sound: blip }
];

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
  componentDidUpdate(){
       
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
              <PlayMusic id={this.state.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Display(props) {
  if (props.id === "") {
    return "Saund name";
  }
  const obj = data.filter(v => v.id === props.id);
  return <p>{obj[0].name}</p>;
}
function PlayMusic(props) {
  if (props.id === "") {
    return false;
  }
  const obj = data.filter(v => v.id === props.id);
  return <audio src={obj[0].sound} autoPlay />;
}

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
          {this.props.letter}
          
        </div>
      </div>
    );
  }
}

export default App;
