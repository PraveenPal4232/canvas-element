import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

export default function CustomStage() {
  console.log(window.innerWidth, window.innerHeight);
  return (
    <Stage width={window.innerWidth - 300} height={window.innerHeight}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={window.innerWidth - 300}
          height={window.innerHeight}
          fill="red"
          shadowBlur={10}
        />
        <Text
          text="00"
          fontSize={100}
          fill="white"
          x={(window.innerWidth - 300) / 2}
          y={window.innerHeight / 2}
        />
      </Layer>
    </Stage>
  );
}
