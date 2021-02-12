import styled, { css } from 'styled-components';

import { device } from '../../../theme';
import { col } from '../../styled';

const background = '#FF6767';

const layer = styled.div<{ height: number | null }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  color: #fff;

  ${({ height }) => {
    if (height) {
      return css`
        height: ${height}px;
      `;
    } else {
      return css`
        height: 100vh;
      `;
    }
  }}
`;

interface AreaType {
  rect: any;
  show: boolean;
}

const area = styled.div<AreaType>`
  border-radius: 4px;
  position: absolute;
  opacity: 1;
  display: flex;
  ${({ rect }) => {
    return css`
      width: ${rect.width}px;
      height: ${rect.height}px;
      left: ${rect.left}px;
      top: ${rect.top}px;
    `;
  }}
  ${({ show }) => {
    if (!show) {
      return css`
        display: none;
      `;
    }
  }}
`;

const topLeftComment = css`
  top: initial;
  bottom: calc(100% + 30px);
  left: initial;
  right: initial;
  &:after {
    left: 10%;
    top: 100%;
    border-top: 20px solid ${background};
    border-bottom: none;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;

const topRightComment = css`
  top: initial;
  bottom: calc(100% + 30px);
  left: initial;
  right: initial;
  &:after {
    left: 10%;
    top: 100%;
    border-top: 20px solid ${background};
    border-bottom: none;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;

const bottomLeftComment = css`
  top: calc(100% + 30px);
  bottom: initial;
  left: 0;
  right: initial;
  &:after {
    top: -20px;
    bottom: initial;
    left: 10%;
    right: initial;
    border-top: none;
    border-bottom: 20px solid ${background};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;

const bottomRightComment = css`
  top: calc(100% + 30px);
  bottom: initial;
  left: initial;
  right: 0;
  &:after {
    top: -20px;
    bottom: initial;
    left: initial;
    right: 10%;
    border-top: none;
    border-bottom: 20px solid ${background};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;

const leftComment = css`
  top: -10px;
  bottom: initial;
  left: initial;
  right: calc(100% + 30px);
  &:after {
    left: 100%;
    top: 10px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid ${background};
    border-right: none;
  }
`;

const rightComment = css`
  top: -10px;
  bottom: initial;
  left: calc(100% + 30px);
  right: initial;
  &:after {
    left: -40px;
    top: 10px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: none;
    border-right: 20px solid ${background};
  }
`;

export const StartLayer = styled(layer)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20000;
`;

export const BlendLayer = styled(layer)`
  background-color: rgba(0, 0, 0, 0.3);
  mix-blend-mode: hard-light;
`;

export const CommentLayer = styled(layer)``;

export const Area = styled(area)`
  background-color: rgb(128, 128, 128);
`;

export const WhiteArea = styled(area)`
  background: none;
`;

export const StartComment = styled.div`
  ${col}
  position: absolute;
  padding: 16px;
  background-color: ${background};
  width: 330px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CommentBox = styled.div`
  flex: 1 auto;
  position: relative;
`;

export const Comment = styled.div<{ type: string }>`
  ${col}
  position: absolute;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background-color: ${background};
  width: 200px;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    clear: both;
  }

  @media ${device.md} {
    width: 330px;
  }

  ${({ type }) => {
    if (type === 'topLeft') {
      return css`
        ${topLeftComment}
      `;
    } else if (type === 'topRight') {
      return css`
        ${topRightComment}
      `;
    } else if (type === 'bottomLeft') {
      return css`
        ${bottomLeftComment}
      `;
    } else if (type === 'bottomRight') {
      return css`
        ${bottomRightComment}
      `;
    } else if (type === 'left-to-bottomLeft') {
      return css`
        ${bottomLeftComment}
        @media ${device.md} {
          ${leftComment}
        }
      `;
    } else if (type === 'left-to-bottomRight') {
      return css`
        ${bottomRightComment}
        @media ${device.md} {
          ${leftComment}
        }
      `;
    } else if (type === 'right-to-bottomLeft') {
      return css`
        ${bottomLeftComment}
        @media ${device.md} {
          ${rightComment}
        }
      `;
    } else if (type === 'right-to-bottomRight') {
      return css`
        ${bottomRightComment}
        @media ${device.md} {
          ${rightComment}
        }
      `;
    }
  }}
`;

export const CommentHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #fff;
  margin: 16px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Next = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  width: 90px;
  padding: 8px 12px;
  border: 1px solid #fff;
  color: ${background};
  background-color: #fff;
`;
