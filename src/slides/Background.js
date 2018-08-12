import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="要解决什么问题">Why we need tests</Title>
        <List
          items={[
            "Validate implementation (验证实现)",
            "Ensure quality of changes (保证变更质量)",
            "Maintainable in future (好的用例能当文档)"
          ]}
        />
      </Slide>
    );
  }
}
