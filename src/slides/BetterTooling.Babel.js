import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Already supported internally">
          Better Tooling - Babel
        </Title>
        <CodePane lang="json" source={require("raw-loader!../codes/babelrc")} />
        <CodePane
          lang="js"
          source={require("raw-loader!../codes/usingBabel.txt")}
        />
      </Slide>
    );
  }
}
