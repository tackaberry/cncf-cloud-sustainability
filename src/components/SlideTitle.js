// example Layout.js
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 0.5em;
  margin-left: 1em;
`;

export default ({ children, color }) => (
  <Div
    style={{
      position: "absolute",
      top: "25px",
      left: "25px",
    }}
  >
    <h1>{children}</h1>
  </Div>
);
