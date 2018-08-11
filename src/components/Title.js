import React, { Component } from "react";
import { Heading, Text } from "spectacle";

export default ({ children, desc }) => {
  return (
    <>
      <Heading fit>{children}</Heading>
      {desc ? (
        <Text textColor="quarternary" style={{ marginTop: 10 }}>
          {desc}
        </Text>
      ) : null}
    </>
  );
};
