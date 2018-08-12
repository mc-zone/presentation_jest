import React, { Component } from "react";
import { Slide, Text, Layout } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title fit={false} desc="Handling localStorage">
          Some Tips
        </Title>
        <CodePane lang="markup" source="yarn add jest-localstorage-mock -D" />
        <CodePane
          lang="json"
          source={JSON.stringify(
            {
              jest: {
                setupFiles: ["jest-localstorage-mock"]
              }
            },
            null,
            2
          )}
        />
      </Slide>
    );
  }
}
