import React from "react";
import styled from "styled-components";
import { useDeck } from "mdx-deck";

const Styled = styled.div`
  display: flex;
  margin-bottom: 20px;
  z-index: 1;
  justify-content: center;
  div {
    width: 40vw;
    background-color: #333;
    height: 8px;
    border-radius: 4px;
    div {
      background-color: #ffeeee;
      width: ${(props) => `${props.progress || 0}%`};
    }
  }
`;

const toPercent = (index, length) => Math.ceil(((index + 1) * 100) / length);

export default () => {
  const { index, length } = useDeck();

  return (
    <Styled progress={toPercent(index, length)}>
      <div>
        <div />
      </div>
    </Styled>
  );
};
