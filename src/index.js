import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Style from './Style.css';

const Bcolor = props =>(
  <div className="cool-color">{props.children}</div>
)

render(
  <BrowserRouter>
  <Bcolor>
    <App />
  </Bcolor>
  </BrowserRouter>,
  document.getElementById("root")
);
