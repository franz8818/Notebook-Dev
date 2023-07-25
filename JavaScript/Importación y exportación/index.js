import React from "react";
import { render } from "react-dom";

/**
 * Here I'm importing by default whatever was exported
 * by default on Componet.jsx, it happens to be
 * a react component class with the same name.
 */
import Printer from "./Components";

// here I'm importing two particular functions
// from the Functions.js file
import { multiply, sum } from "./Functions";

let totalMultiplied = multiply(2, 3);
let totalSum = sum(2, 3);
// here I use my component
render(
  <div>
    <Printer content={"Multiplied: " + totalMultiplied} />
    <Printer content={"Sumed: " + totalSum} />
  </div>,
  document.getElementById("root")
);