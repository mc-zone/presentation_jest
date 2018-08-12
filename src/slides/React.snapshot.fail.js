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
          lang="diff"
          code={require("raw-loader!../codes/react.snapshot.fail.txt")}
          ranges={[
            { loc: [10, 16] },
            { loc: [10, 16], image: require("../images/snapshot_fail.png") },
            {
              loc: [10, 16],
              image: require("../images/snapshot_fail.png"),
              note: "Test will fail if not match"
            }
          ]}
        >
          <Title desc="Rely on snapshots">Detect changes</Title>
        </CodeSlide>
      </Slide>
    );
  }
}
