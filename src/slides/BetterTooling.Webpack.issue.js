import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Main challenges:">Tooling Supports - Webpack</Title>
        <List
          items={[
            "Non-JS-files (CSS, fonts, images...)",
            "Path handling (root, dirs, ext, alias...)",
            "Special transform (Define/ProvidePlugin...)",
            "Syntax (ESM, dynamic import)"
          ]}
        />
      </Slide>
    );
  }
}
