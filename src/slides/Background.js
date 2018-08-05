import React, { Component } from "react";
import { Slide, Heading, Appear, Text, List, ListItem } from "spectacle";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading size={2}>Why we need tests</Heading>
        <Text>要解决什么问题</Text>
        <List>
          <ListItem>Validate implementation (验证实现)</ListItem>
          <ListItem>Ensure quality of changes (保证变更质量)</ListItem>
          <ListItem>Maintainable in future (好的用例即文档)</ListItem>
        </List>
      </Slide>
    );
  }
}
