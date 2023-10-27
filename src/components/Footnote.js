// example Layout.js
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  a:focus,
  a:hover,
  a:visited,
  a:link,
  a:active {
    color: #fff;
  }
  a {
    background-color: #000;
    padding: 2px;
  }
  font-size: 0.5em;
  margin-left: 1em;
`;

export default ({ children, color }) => (
  <Div
    style={{
      position: "absolute",
      bottom: "25px",
      left: "0",
    }}
  >
    {children}
  </Div>
);
