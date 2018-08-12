import React, { Component } from "react";
import { Text } from "spectacle";

export default ({ children, style, ...props }) => (
  <Text textColor="quarternary" style={style || { marginTop: 10 }} {...props}>
    {children}
  </Text>
);
