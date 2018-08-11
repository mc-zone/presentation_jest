import React, { Component } from "react";
import { Text, List, ListItem } from "spectacle";

export default ({ items }) => (
  <List>
    {items.map((txt, index) => (
      <ListItem key={index}>{txt}</ListItem>
    ))}
  </List>
);
