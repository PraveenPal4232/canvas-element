import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

export default function CustomStage() {
  return (
    <Stage width={window.innerWidth - 300} height={window.innerHeight}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={window.innerWidth - 300}
          height={window.innerHeight}
          fill="#333333"
          shadowBlur={10}
        />
      </Layer>
    </Stage>
  );
}
