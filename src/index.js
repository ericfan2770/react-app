import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
// console.log(element);

// 2nd arg: where in real DOM we'll render
ReactDOM.render(element, document.getElementById("root"));
