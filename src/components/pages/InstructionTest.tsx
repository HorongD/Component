import React from 'react';
import styled from 'styled-components';
import { device } from '../../theme';
import Instruction from '../shared/Instruction';
import { col } from '../styled';

const Point = styled.div`
  ${col}
  margin: 100px auto;
  width: 80%;

  div {
    height: 100px;
    margin-bottom: 200px;
    background-color: #fff;
  }
  @media ${device.md} {
    width: 500px;
  }
`;

interface Props {}

export const InstructionTest = (props: Props) => {
  return (
    <>
      <Point>
        <div data-guide='1'>1번</div>
        <div data-guide='2'>2번</div>
        <div data-guide='3'>3번</div>
        <div data-guide='4'>4번</div>
        <div data-guide='5'>5번</div>
        <div data-guide='6'>6번</div>
        <div data-guide='7'>7번</div>
        <div data-guide='8'>8번</div>
        <div data-guide='9'>8번</div>
        <div data-guide='10'>8번</div>
        <div data-guide='11'>8번</div>
        <div data-guide='12'>8번</div>
      </Point>
      <Instruction
        show={true}
        items={[
          {
            groupNumber: 0,
            type: 'topLeft',
            selector: '[data-guide="1"]',
            message: '1번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'topRight',
            selector: '[data-guide="2"]',
            message: '2번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'bottomLeft',
            selector: '[data-guide="3"]',
            message: '3번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'bottomRight',
            selector: '[data-guide="4"]',
            message: '4번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'left-to-topLeft',
            selector: '[data-guide="5"]',
            message: '5번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'left-to-topRight',
            selector: '[data-guide="6"]',
            message: '6번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'left-to-bottomLeft',
            selector: '[data-guide="7"]',
            message: '7번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'left-to-bottomRight',
            selector: '[data-guide="8"]',
            message: '8번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'right-to-topLeft',
            selector: '[data-guide="9"]',
            message: '5번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'right-to-topRight',
            selector: '[data-guide="10"]',
            message: '6번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'right-to-bottomLeft',
            selector: '[data-guide="11"]',
            message: '7번 입니다.',
          },
          {
            groupNumber: 0,
            type: 'right-to-bottomRight',
            selector: '[data-guide="12"]',
            message: '8번 입니다.',
          },
        ]}
      />
    </>
  );
};
