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

  function toTree(listData: Item[], rootId: string | null) {
    const rootNodes: Item[] = [];

    function setChildren(
      nodes: Item[] | undefined,
      item: Item,
      index: number
    ): any {
      if (nodes instanceof Array) {
        return nodes.some(function (node) {
          const isMyChild = node.id === item.parentId;
          if (isMyChild) {
            node.children = node.children || [];
            const child = listData.splice(index, 1)[0];
            return node.children.push(child);
          }
          return setChildren(node.children, item, index);
        });
      }
    }

    while (listData.length > 0) {
      listData.some(function (item, index) {
        const isRoot = item.parentId === rootId;
        if (isRoot) {
          const root = listData.splice(index, 1)[0];
          return rootNodes.push(root);
        }
        return setChildren(rootNodes, item, index);
      });
    }

    return rootNodes;
  }

  function toTreeDOM(treeItems: Item[] | undefined) {
    return treeItems?.map((treeItemData) => {
      let children;

      const hasChildren =
        treeItemData.children && treeItemData.children.length > 0;

      if (hasChildren) {
        children = toTreeDOM(treeItemData.children);
        return (
          <TreeItem key={treeItemData.id} onClick={e => {
            e.currentTarget.classList.toggle('on')
          }}>
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
