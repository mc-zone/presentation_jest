import React, { Component } from "react";
import { Slide, Heading } from "spectacle";
import Text from "../components/Text";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading fit>Test Web Applications</Heading>
        <Text>with</Text>
        <Heading textSize="20rem">Jest</Heading>
        <Text>@mc-zone</Text>
      </Slide>
    );
  }
}
