import React, { Component } from "react";
import { Slide, Text, Layout } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Add preset">Tooling Supports - Puppeteer</Title>
        <CodePane lang="markup" source={"yarn add jest-puppeteer -D"} />
        <CodePane
          lang="json"
          source={JSON.stringify(
            {
              jest: {
                preset: "jest-puppeteer"
              }
            },
            null,
            2
          )}
        />
        <CodePane
          lang="js"
          source={require("raw-loader!../codes/puppeteer.txt")}
        />
      </Slide>
    );
  }
}
