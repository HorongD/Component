import React from 'react';
import { Tree } from '../shared/Tree';

interface Props {}

export const TreeTest = (props: Props) => {
  return (
    <Tree
      list={[
        {
          id: '1',
          parentId: null,
          children: [
            { id: '10', parentId: '1' },
            { id: '11', parentId: '1' },
          ],
        },
        {
          id: '2',
          parentId: null,
          children: [
            { id: '20', parentId: '2' },
            { id: '21', parentId: '2' },
          ],
        },
        {
          id: '3',
          parentId: null,
          children: [
            { id: '30', parentId: '3' },
            { id: '31', parentId: '3' },
          ],
        },
      ]}
    />
  );
};
