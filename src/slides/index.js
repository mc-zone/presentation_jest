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
import createTheme from "spectacle-theme-nova";

const getSlide = name => {
  const Item = require(`./${name}`).default;
  return <Item />;
};

const theme = createTheme();

export default class extends Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        controls
        progress="pacman"
      >
        {getSlide("Start")}
        {getSlide("Background")}
        {getSlide("Problems")}
        {getSlide("WhatJestBring")}
      </Deck>
    );
  }
}
