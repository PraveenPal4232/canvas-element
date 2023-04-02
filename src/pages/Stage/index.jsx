import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { useSelector } from "react-redux";
import { mainState } from "../../store/mainSlice";

export default function CustomStage() {
  const { number, color } = useSelector(mainState);
  return (
    <Stage width={window.innerWidth - 300} height={window.innerHeight}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={window.innerWidth - 300}
          height={window.innerHeight}
          fill={color}
          shadowBlur={10}
        />
        <Text
          text={number}
          fontSize={100}
          fill="white"
          x={(window.innerWidth - 300) / 2}
          y={window.innerHeight / 2}
        />
      </Layer>
    </Stage>
  );
}
