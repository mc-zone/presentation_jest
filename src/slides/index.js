import React, { Component } from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import createTheme from "spectacle/lib/themes/default/index";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";

const getSlide = name => {
  const Item = require(`./${name}`).default;
  return <Item />;
};

const theme = createTheme(
  {
    primary: "#2d2d2d",
    secondary: "#f8c555",
    tertiary: "#f08d49",
    quarternary: "#ccc"
  },
  {}
);

export default class extends Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        controls
        theme={theme}
        progress="pacman"
      >
        {getSlide("Start")}
        {getSlide("Background")}
        {getSlide("Pain")}
        {getSlide("WhatJestTake")}
        {getSlide("Efficiency.ZeroConf")}
        {getSlide("Efficiency.Async")}
        {getSlide("Efficiency.Faster")}
        {getSlide("Isolation")}
        {getSlide("Isolation.Mock")}
        {getSlide("BetterTooling.Babel")}
        {getSlide("BetterTooling.Webpack.issue")}
        {getSlide("BetterTooling.Webpack.jestConfig")}
      </Deck>
    );
  }
}
