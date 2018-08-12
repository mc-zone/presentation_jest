require('prismjs/components/prism-core');
require("prismjs/components/prism-bash");
require("prismjs/components/prism-json");
require("prismjs/components/prism-diff");
require("prismjs/themes/prism-tomorrow.css");

import React, { Component } from 'react';
import { render } from "react-dom";
import Slides from "./slides";
import "./main.css";

let AppContainer;
if(process.env.NODE_ENV === "development"){
  AppContainer = require("react-hot-loader").AppContainer;
}else{
  AppContainer = ({children}) => <div>{children}</div>;
}

const dom = document.createElement("div");
document.body.appendChild(dom);
render(
  <AppContainer>
    <Slides />
  </AppContainer>
, dom);

if (process.env.NODE_ENV === "development" && module.hot) {
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
