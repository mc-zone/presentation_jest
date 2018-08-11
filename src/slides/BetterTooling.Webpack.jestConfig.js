import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import CodeSlide from "../components/CodeSlide";

export default class extends Component {
  render() {
    return (
      <Slide>
        <CodeSlide
          {...this.props}
          lang="json"
          code={require("raw-loader!../codes/jest.config.webpack.txt")}
          ranges={[
            { loc: [0, 10], note: "Add configs in package.json" },
            { loc: [5, 11], note: "context, resolve.modules" },
            { loc: [12, 13], note: "resolve.extensions" },
            { loc: [13, 18], note: "resolve.alias" }
          ]}
        >
          <Title desc="Resolve by appropriate configurations">
            Better Tooling - Webpack
          </Title>
        </CodeSlide>

        {/*
        <Text fit>
          (Or you can provide a jest.config.js file through{" "}
          <Code style={{ fontSize: 4 }}>--config</Code>)
        </Text>
        */}
      </Slide>
    );
  }
}
