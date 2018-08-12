import React, { Component } from "react";
import { Heading } from "spectacle";
import Text from "./Text";

export default ({ children, desc, fit = true }) => {
  return (
    <>
      <Heading className="heading" fit={fit}>
        {children}
      </Heading>
      {desc ? <Text>{desc}</Text> : null}
    </>
  );
};
