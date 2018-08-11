import React, { Component } from "react";
import { Slide, Image } from "spectacle";
import Title from "../components/Title";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Runs across workers">Efficiency - Faster</Title>
        <Image height={500} src={require("../images/paralle_console.png")} />
      </Slide>
    );
  }
}
