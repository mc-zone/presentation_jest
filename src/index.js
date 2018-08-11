import React, { Component } from 'react';
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Slides from "./slides";
import "./main.css";

const dom = document.createElement("div");
document.body.appendChild(dom);
render(
  <AppContainer>
    <Slides />
  </AppContainer>
, dom);

if (module.hot) {
  module.hot.accept("./slides", () => {
    const NextPresentation = require("./slides").default;
    render(
      <AppContainer>
        <Slides />
      </AppContainer>,
      dom
    );
  });
}
