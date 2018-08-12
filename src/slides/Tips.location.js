import React, { Component } from "react";
import { Slide, Text, Layout } from "spectacle";
import Title from "../components/Title";
import CodePane from "../components/CodePane";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title fit={false}>Some Tips</Title>
        <Text textColor="quarternary" textSize={20} style={{ marginTop: 10 }}>
          Location assert: History API
        </Text>
        <CodePane
          lang="js"
          source={require("raw-loader!../codes/tips.location.history.txt")}
        />
        <Text textColor="quarternary" textSize={20} style={{ marginTop: 10 }}>
          Location assert: Using location.assign() instead of location.href
        </Text>
        <CodePane
          lang="js"
          source={require("raw-loader!../codes/tips.location.assign.txt")}
        />
      </Slide>
    );
  }
}
