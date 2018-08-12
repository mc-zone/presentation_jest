import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="I just want to prevent unexpected change">
          How many UI tests do I need to write?
        </Title>
      </Slide>
    );
  }
}
