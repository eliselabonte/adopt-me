import React from "react";
import ReactDOM from 'react-dom'
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Jasper",
      animal: "cat",
      breed: "Maine Coon",
    }),
    React.createElement(Pet, {
      name: "Porky",
      animal: "porcupine",
      breed: "feral",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
