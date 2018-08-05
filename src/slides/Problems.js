import React, { Component } from "react";
import { Slide, Heading, Appear, Text, List, ListItem } from "spectacle";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Heading size={2}>Pain points</Heading>
        <Text>痛点</Text>
        <List>
          <ListItem>Effort (writing, excuting) (编写成本投入)</ListItem>
          <ListItem>
            Effect (dependencies, compile process) (代码间影响)
          </ListItem>
          <ListItem>Frequent changes (频繁变更)</ListItem>
        </List>
      </Slide>
    );
  }
}
