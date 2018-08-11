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
          ranges={[
            { loc:[0, 8] },
            { loc:[1, 2], note: "yarn add react-test-renderer" },
            { loc:[5, 9], note: "Render the components to JSON tree format" },
            { loc:[5, 12], note: "So you can make assert with structured data" },
            { loc:[0, 0], note: "Example: Mock the URL...." },
            { loc:[0, 0], note: "Then trigger some actions" },
            { loc:[0, 0], title: "WWW" },
          ]}
        >
          <Title>Test React Apps</Title>
        </CodeSlide>
      </Slide>
    )
  }
}

