import React, { Component } from "react";
import { Text } from "spectacle";

export default ({ children }) => (
  <Text textColor="quarternary" style={{ marginTop: 10 }}>
    {children}
  </Text>
);
