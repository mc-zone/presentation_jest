import React, { Component } from "react";
import {
  Slide,
  Heading,
  Appear,
  Text,
  List,
  ListItem,
  CodePane
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

export default class extends Component {
  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="json"
        code={require("raw-loader!../codes/jest.config.webpack.txt")}
        ranges={[
          { loc: [2, 5], note: "context, resolve.modules" },
          { loc: [6, 7], note: "resolve.extensions" },
          { loc: [8, 11], note: "resolve.alias" }
          // ...
        ]}
      />
    );
  }
}
