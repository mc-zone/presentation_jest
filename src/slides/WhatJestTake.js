import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title desc="Jest 带来什么?">What Jest takes for us?</Title>
        <List
          items={[
            "Efficiency (更快编写和执行)",
            "Better isolation (更好的影响隔离, 最小关注)",
            "Better tooling support (更好的工具链支持)",
            "Snapshot testing (快照对比)"
          ]}
        />
      </Slide>
    );
  }
}
