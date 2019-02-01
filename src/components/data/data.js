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

export default data;
