import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { useSelector } from "react-redux";
import { mainState } from "../../store/mainSlice";

export default function CustomStage() {
  const { number, color } = useSelector(mainState);
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <Stage width={size.width - 300} height={size.height}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={size.width - 300}
          height={size.height}
          fill={color}
          shadowBlur={10}
        />
        <Text
          text={number}
          fontSize={100}
          fill="white"
          cursor="pointer"
          x={(size.width - 400) / 2}
          y={(size.height - 100) / 2}
          onMouseEnter={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor =
              "url(https://raw.githubusercontent.com/PraveenPal4232/canvas-element/main/public/cursor-small.png), auto";
          }}
          onMouseLeave={(e) => {
            const container = e.target.getStage().container();
            container.style.cursor = "default";
          }}
        />
      </Layer>
    </Stage>
  );
}
