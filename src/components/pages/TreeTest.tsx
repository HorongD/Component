import React from 'react';
import { Tree } from '../shared/Tree';

interface Props {}

export const TreeTest = (props: Props) => {
  return (
    <Tree
      tree={[
        {
          level: 0,
          id: '1',
          parentId: null,
          children: [
            { level: 1, id: '10', parentId: '1' },
            {
              level: 1,
              id: '11',
              parentId: '1',
              children: [
                { level: 2, id: '111', parentId: '11' },
                { level: 2, id: '112', parentId: '11' },
              ],
            },
          ],
        },
        {
          level: 0,
          id: '2',
          parentId: null,
          children: [
            { level: 1, id: '20', parentId: '2' },
            { level: 1, id: '21', parentId: '2' },
          ],
        },
        {
          level: 0,
          id: '3',
          parentId: null,
          children: [
            { level: 1, id: '30', parentId: '3' },
            { level: 1, id: '31', parentId: '3' },
          ],
        },
      ]}
    />
  );
};
