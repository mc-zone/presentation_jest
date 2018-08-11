import React, { Component } from "react";
import { Slide, Heading, Text } from "spectacle";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading fit>Test Modern Web Applications</Heading>
        <Heading>with</Heading>
        <Heading fit>Jest</Heading>
        <Text textColor="quarternary">@mc-zone</Text>
      </Slide>
    );
  }
}
