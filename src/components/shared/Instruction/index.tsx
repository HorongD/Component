import React, { ReactElement, useEffect, useState } from "react";

import { Area, BlendLayer, ButtonGroup, Comment, CommentBox, CommentHeader, CommentLayer, Line, Next, StartComment, StartLayer, WhiteArea } from "./styled";

interface Item {
  groupNumber?: number;
  type: string;
  selector: string;
  message: string;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

interface Props {
  show: boolean;
  items: Array<Item> | null;
}

const Instruction = ({ show, items }: Props): ReactElement => {
  const [domList, setDomList] = useState<Item[]>([]);
  const [showIndex, setShowIndex] = useState<number>(0);
  const [height, setHeight] = useState<number>(1500);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isStartShow, setIsStartShow] = useState<boolean>(false);

  function toRectList(list: Item[] | null) {
    const rectList: Item[] = [];

    if (list) {
      list.forEach((item) => {
        const rect = document.querySelector(item.selector)?.getClientRects()[0];

        if (rect) {
          rectList.push({
            groupNumber: item.groupNumber,
            type: item.type,
            selector: item.selector,
            message: item.message,

            width: rect.width,
            height: rect.height,
            left: rect.left,
            top: rect.top,
          });
        }
      });
    }

    return rectList;
  }

  function closeStart() {
    setIsStartShow(false);
    const html = document.querySelector("html");

    if (html) {
      setHeight(html.scrollHeight);
    }

    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = "auto";
    }
  }

  function close() {
    setIsShow(false);
    setShowIndex(0);
  }

  function onMove() {
    const index = showIndex;
    const lastGroupNumber = domList[domList.length - 1].groupNumber;

    if (lastGroupNumber !== undefined) {
      if (index === lastGroupNumber) {
        close();
      } else if (index >= 0 && index < lastGroupNumber) {
        setShowIndex(index + 1);
      }
    }
  }

  useEffect(() => {
    if (show) {
      const body = document.querySelector("body");
      if (body) {
        window.scrollTo(0, 0);
        body.style.overflow = "hidden";
        setIsStartShow(show);
      }
    }

    window.onresize = function () {
      window.scrollTo(0, 0);
      setDomList(toRectList(items));
      setShowIndex(0);
      const html = document.querySelector("html");

      if (html) {
        setHeight(html.scrollHeight);
      }
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <>
      {isStartShow && (
        <StartLayer height={null}>
          <StartComment>
            <CommentHeader>{/* <CloseIcon
                onClick={() => {
                  closeStart();
                }}
              /> */}</CommentHeader>
            <div>안녕하세요? 웹서비스에 오신것을 환영합니다. 사용법을 알고 싶다면, 다음 버튼을 클릭해주세요.</div>
            <Line></Line>
            <ButtonGroup>
              <Next
                onClick={() => {
                  closeStart();
                  setDomList(toRectList(items));
                  setIsShow(true);
                }}
              >
                다음
              </Next>
            </ButtonGroup>
          </StartComment>
        </StartLayer>
      )}
      {isShow && (
        <>
          <BlendLayer height={height}>
            {domList?.map((rect, i) => {
              return <Area key={i} rect={rect} show={showIndex === rect.groupNumber}></Area>;
            })}
          </BlendLayer>
          <CommentLayer
            height={height}
            onClick={() => {
              onMove();
            }}
          >
            {domList?.map((rect, i) => {
              return (
                <WhiteArea key={i} rect={rect} show={showIndex === rect.groupNumber}>
                  <CommentBox>
                    <Comment type={rect.type}>
                      <div>
                        {rect.message.split("\n").map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </Comment>
                  </CommentBox>
                </WhiteArea>
              );
            })}
          </CommentLayer>
        </>
      )}
    </>
  );
};

export default Instruction;
