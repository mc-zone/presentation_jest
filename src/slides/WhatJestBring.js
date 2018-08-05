import React, { Component } from "react";
import { Slide, Heading, Appear, Text, List, ListItem } from "spectacle";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading size={2}>What does Jest have?</Heading>
        <Text>Jest 带来什么?</Text>
        <List>
          <ListItem>Efficiency (更快编写和执行)</ListItem>
          <ListItem>Better isolation (更好的影响隔离, 最小关注)</ListItem>
          <ListItem>Better tooling support (更好的工具链支持)</ListItem>
          <ListItem>Snapshot testing (快照对比)</ListItem>
        </List>
      </Slide>
    );
  }
}
