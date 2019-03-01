import data from "./data/data";
import React from "react";

export const PlayMusic = ({ id }) => {
  const obj = data.filter(v => v.id === id);
  return <audio src={obj[0].sound} autoPlay />;
};
