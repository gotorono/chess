import React, { useState, useEffect, useCallback } from "react";
import useMousePosition from "./useMousePosition";

import { kingCheck } from "./validatePlacement";

import { newX, newY, translateX, translateY } from "./positionPlacement";

import classnames from "classnames";

function King(props) {
  const [isDown, setIsDown] = useState(false);

  const pieceRef = React.useRef();

  const { x, y } = useMousePosition(isDown);

  const mouseRightClick = useCallback(
    (e) => {
      if (isDown === true) {
        e.preventDefault();
        setIsDown(false);
      }
    },
    [isDown]
  );

  useEffect(() => {
    window.addEventListener("contextmenu", mouseRightClick);

    return () => window.removeEventListener("contextmenu", mouseRightClick);
  }, [mouseRightClick]);

  const mouseUpHandler = useCallback(
    (e) => {
      if (e.button !== 2) {
        if (isDown === true) {
          let posX = newX(x, pieceRef, props.playing);
          let posY = newY(y, pieceRef, props.playing);

          let check = kingCheck(
            props.board,
            props.position,
            { x: posX, y: posY },
            props.color,
            props.canCastle
          );

          console.log(check);

          if (check === true) {
            if (props.place)
              props.place(
                props.position,
                { x: posX, y: posY },
                props.color === "black" ? 11 : 1
              );
          } else if (
            props.canCastle.queenside === true &&
            check === "queenside"
          ) {
            if (props.castles) {
              props.castles(
                "queenside",
                props.position,
                { x: posX, y: posY },
                props.color === "black" ? 11 : 1
              );
            }
          } else if (
            props.canCastle.kingside === true &&
            check === "kingside"
          ) {
            if (props.castles) {
              props.castles(
                "kingside",
                props.position,
                { x: posX, y: posY },
                props.color === "black" ? 11 : 1
              );
            }
          }
          setIsDown(false);
        }
      }
    },
    [isDown, x, y, props]
  );

  useEffect(() => {
    window.addEventListener("mouseup", mouseUpHandler);

    return () => window.removeEventListener("mouseup", mouseUpHandler);
  }, [mouseUpHandler]);

  return (
    <td>
      {props.children}
      <div
        className={classnames(
          "piece pawn",
          props.color === "white" ? "white" : "black"
        )}
        ref={pieceRef}
        onMouseDown={props.history !== true ? () => setIsDown(true) : null}
        style={
          isDown === true && pieceRef.current
            ? {
                zIndex: 100,
                transform: `translate(${translateX(
                  x,
                  pieceRef,
                  props.playing
                )}px, ${translateY(y, pieceRef, props.playing)}px) rotate(${
                  props.playing === "black" ? 180 : 0
                }deg)`,
                cursor: "grabbing",
              }
            : {
                zIndex: 10,
                transform: `translate(${0}px, ${0}px) rotate(${
                  props.playing === "black" ? 180 : 0
                }deg)`,
              }
        }
      >
        K
      </div>
    </td>
  );
}

export default King;
