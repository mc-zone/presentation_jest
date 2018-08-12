import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="有哪些痛点" fit={false}>
          Pain points
        </Title>
        <List
          items={[
            "Effort: writing, excuting (编写成本投入)",
            "Effect: deps, compiling (依赖/编译影响)",
            "Frequent changes (频繁变更)"
          ]}
        />
      </Slide>
    );
  }
}
