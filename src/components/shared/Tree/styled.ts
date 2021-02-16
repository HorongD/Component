import styled, { css } from 'styled-components';
import { col, row } from '../../styled';

export const TreeView = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const TreeList = styled.ul`
  ${col}
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TreeItem = styled.li`
  list-style: none;
  a.on + ul {
    max-height: initial;
  }
  ul {
    max-height: 0;
    overflow: hidden;
  }
`;

export const TreeLink = styled.a<{ level: number }>`
  ${row}
  align-items: center;
  padding: 3px 0;
  &:hover {
    background-color: #eee;
  }
  ${({ level }) => {
    if (level) {
      return css`
        padding-left: ${10 * level}px;
      `;
    }
  }}
`;
