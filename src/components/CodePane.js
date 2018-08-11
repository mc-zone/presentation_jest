import React, { Component } from "react";
import { CodePane } from "spectacle";

export default ({ size = 20, ...props }) => (
  <CodePane
    {...props}
    theme="external"
    textSize={size}
    className="code-normal"
  />
);
