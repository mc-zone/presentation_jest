import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Main challenges:">Better Tooling - Webpack</Title>
        <List
          items={[
            "Non-JS-files (CSS, fonts, images...)",
            "Path handling (root, dirs, ext, alias...)",
            "Syntax (ESM, dynamic import)",
            "Special transform (Define/ProvidePlugin...)"
          ]}
        />
      </Slide>
    );
  }
}
