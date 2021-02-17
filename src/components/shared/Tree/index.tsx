import React, { useEffect, useState } from 'react';
import { TreeView, TreeList, TreeItem, TreeLink } from './styled';
import { SiGumtree } from 'react-icons/si';
import { RiLeafLine } from 'react-icons/ri';

interface Item {
  id: string;
  parentId: string | null;
  children?: Item[];
  level: number;
}

interface Props {
  list: Item[];
}

export const Tree = ({ list }: Props) => {
  const [treeData, setTreeData] = useState<Item[]>([]);

  useEffect(() => {
    setTreeData(toTree(list, null));
  }, [list]);

  function toTree(treeItems: Item[], id: string | null): Item[] {
    return treeItems
      .filter((treeItem) => treeItem.parentId === id)
      .map((treeItem) => ({
        ...treeItem,
        children: toTree(treeItems, treeItem.id),
      }));
  }
  
  function toTreeDOM(treeItems: Item[] | undefined) {
    return treeItems?.map((treeItemData) => {
      let children;

      const hasChildren =
        treeItemData.children && treeItemData.children.length > 0;

      if (hasChildren) {
        children = toTreeDOM(treeItemData.children);
        return (
          <TreeItem
            key={treeItemData.id}
            onClick={(e) => {
              e.currentTarget.classList.toggle('on');
            }}
          >
            <TreeLink
              href='#'
              level={treeItemData.level}
              onClick={(e) => {
                e.currentTarget.classList.toggle('on');
              }}
            >
              <SiGumtree />
              {treeItemData.id}
            </TreeLink>
            <TreeList>
              <TreeItem>{children}</TreeItem>
            </TreeList>
          </TreeItem>
        );
      } else {
        return (
          <TreeItem key={treeItemData.id}>
            <TreeLink href='#' level={treeItemData.level}>
              <RiLeafLine />
              {treeItemData.id}
            </TreeLink>
          </TreeItem>
        );
      }
    });
  }

  return <TreeView>{toTreeDOM(treeData)}</TreeView>;
};
