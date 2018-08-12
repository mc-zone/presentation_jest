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
          fullAfterIndex={1}
          code={require("raw-loader!../codes/avoid.txt")}
          ranges={[
            { loc: [0, 6] },
            { loc: [4, 6], note: "Example: Zepto .css() API" },
            {
              loc: [4, 6],
              image: require("../images/csstext.png"),
              note: "Can't be work, the color is still black"
            },
            {
              loc: [4, 6],
              image: require("../images/zepto.png"),
              note:
                "Because Zepto's trick `style.cssText = \";\" + css;`\nhasn't supported by JSDOM."
            }
          ]}
        >
          <Title
            fit={false}
            desc="Be careful different between JSDOM and Browser"
          >
            Some Tips
          </Title>
        </CodeSlide>
      </Slide>
    );
  }
}
