import React, { Component } from "react";
import { Slide, Layout } from "spectacle";
import Title from "../components/Title";
import CodeSlide from "../components/CodeSlide";

export default class extends Component {
  render() {
    return (
      <Slide>
        <CodeSlide
          {...this.props}
          lang="js"
          code={require("raw-loader!../codes/async.txt")}
          fullAfterIndex={1}
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 5], note: "Promise" },
            { loc: [6, 10], note: "async/await" },
            { loc: [11, 21], note: "Timer mocks" },
            { loc: [12, 13] },
            { loc: [14, 17] },
            { loc: [18, 20], note: "Will be executed manually" }
          ]}
        >
          <Title desc="Better async supports">Efficiency - Convenient</Title>
        </CodeSlide>
      </Slide>
    );
  }
}
