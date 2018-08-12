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
          fullAfterIndex={100}
          code={require("raw-loader!../codes/jest.config.webpack.txt")}
          ranges={[
            { loc: [0, 10], note: "Add configs in package.json" },
            { loc: [5, 11], note: "context, resolve.modules" },
            { loc: [12, 13], note: "resolve.extensions" },
            { loc: [13, 17], note: "resolve.alias" },
            {
              loc: [18, 22],
              note:
                "mock static files\n(in most cases they are no need to test)"
            },
            {
              loc: [23, 25],
              note:
                'Or using identity-obj-proxy to mock CSS Module\n(styles.color === "color")'
            },
            { loc: [27, 31], note: "Global Constants (DefinePlugin)" },
            { loc: [32, 33], note: "Set global vars/libs (ProvidePlugin)" },
            { loc: [34, 38], note: "Add some else transformers if not enough" }
          ]}
        >
          <Title desc="Resolve by appropriate configurations">
            Tooling Supports - Webpack
          </Title>
        </CodeSlide>
      </Slide>
    );
  }
}
