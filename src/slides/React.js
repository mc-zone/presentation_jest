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
          lang="js"
          code={require("raw-loader!../codes/react.txt")}
          fullAfterIndex={2}
          ranges={[
            { loc: [0, 8] },
            { loc: [1, 2], note: "yarn add react-test-renderer" },
            { loc: [5, 9], note: "Render the components to JSON tree format" },
            {
              loc: [5, 12],
              note: "So you can make assert with structured data"
            },
            { loc: [14, 15], note: "Then trigger some action" },
            {
              loc: [13, 17],
              note: "And checking changes (the BOM/DOM is rely on JSDOM)"
            }
          ]}
        >
          <Title>Test React Apps</Title>
        </CodeSlide>
      </Slide>
    );
  }
}
