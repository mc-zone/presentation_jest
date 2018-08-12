import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import Text from "../components/Text";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title fit={false}>Suggestion</Title>
        <Text>Using real environment</Text>
        <Text>(like puppeteer)</Text>
        <Text>to handle the tests that</Text>
        <Text>rely on Browser behavior strongly</Text>
      </Slide>
    );
  }
}
