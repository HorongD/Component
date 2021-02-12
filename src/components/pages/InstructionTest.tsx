import React from 'react';
import styled from 'styled-components';
import Instruction from '../shared/Instruction';

const Point = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {}

export const InstructionTest = (props: Props) => {
  return (
    <>
      <Point data-guide="1">1번 팝업</Point>
      <Instruction
        show={true}
        items={[
          {
            groupNumber: 0,
            type: 'topLeft',
            selector: '[data-guide="1"]',
            message: '1번 입니다.',
          },
        ]}
      />
    </>
  );
};
