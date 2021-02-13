import React from "react";
import styled from "styled-components";
import { Smooth } from "../shared/Smooth";
import { col } from "../styled";

const Wrapper = styled.div`
  & > div {
    width: 400px;
    left: calc(50% - 200px);
  }
`;

interface Props {}

export const SmoothTest = (props: Props) => {
  return (
    <Wrapper>
      <Smooth />
    </Wrapper>
  );
};
