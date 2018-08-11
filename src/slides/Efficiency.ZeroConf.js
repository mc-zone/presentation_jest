import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Ready to use">Efficiency - 'Zero configuration'</Title>
        <CodePane lang="markup" source="yarn add jest -D" />
        <CodePane
          lang="javascript"
          source={require("raw-loader!../codes/gettingStartedTest.js")}
        />
        <CodePane
          lang="json"
          source={
            "// package.json\n" +
            JSON.stringify(
              require("../codes/gettingStartedPkgjson.json"),
              null,
              2
            )
          }
        />
        <CodePane lang="markup" source="yarn test" />
      </Slide>
    );
  }
}
