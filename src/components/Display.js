import data from "./data/data";
import React from "react";

export const Display = ({ id }) => {
  if (id === "") {
    return "Saund name";
  }
  const obj = data.filter(v => v.id === id);
  return <p>{obj[0].name}</p>;
};
