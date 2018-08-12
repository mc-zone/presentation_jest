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
          code={require("raw-loader!../codes/react.snapshot.txt")}
          fullAfterIndex={1}
          ranges={[
            { loc: [0, 10] },
            { loc: [7, 9], note: "Just create snapshots to compare next time" },
            { loc: [10, 13], note: "Include some interactive and re-render" },
            { loc: [14, 17], note: "Any number of screenshots" }
          ]}
        >
          <Title>Snapshot Testing</Title>
        </CodeSlide>
      </Slide>
    );
  }
}
