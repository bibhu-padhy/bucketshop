import React from "react";
import { getRandomGameCityColor } from "../lib/tools";

interface WindowProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const Window: React.FC<WindowProps> = ({ x, y, width, height, color }) => (
  <g>
    <defs>
      <filter
        id={`window-shadow-${x}-${y}`}
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
      >
        <feDropShadow dx="1" dy="1" stdDeviation="1" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      stroke="#555555"
      strokeWidth="1"
      filter={`url(#window-shadow-${x}-${y})`}
    />
  </g>
);

interface BuildingProps {
  width: number;
  height: number;
  color: string;
  windowColor?: string;
  windowRows?: number;
  windowColumns?: number;
  className?: string;
}

export const Building: React.FC<BuildingProps> = ({
  width,
  height,
  color,
  windowColor = "lightblue",
  windowRows = 4,
  windowColumns = 3,
  className = "",
}) => {
  const buildingWidth = 100;
  const buildingHeight = 200;
  const windowWidth = 15;
  const windowHeight = 20;
  const windowSpacingX =
    (buildingWidth - windowColumns * windowWidth) / (windowColumns + 1);
  const windowSpacingY =
    (buildingHeight - 40 - windowRows * windowHeight) / (windowRows + 1);

  const windows = [];
  for (let row = 0; row < windowRows; row++) {
    for (let col = 0; col < windowColumns; col++) {
      windows.push(
        <Window
          key={`window-${row}-${col}`}
          x={windowSpacingX + col * (windowWidth + windowSpacingX)}
          y={20 + windowSpacingY + row * (windowHeight + windowSpacingY)}
          width={windowWidth}
          height={windowHeight}
          color={windowColor}
        />
      );
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${buildingWidth} ${buildingHeight}`}
      className={className}
    >
      <defs>
        <filter
          id="building-shadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width={buildingWidth}
        height={buildingHeight}
        fill={color}
        stroke="#555555"
        strokeWidth="2"
        filter="url(#building-shadow)"
      />
      {windows}
      <rect
        x={(buildingWidth - 20) / 2}
        y={buildingHeight - 40}
        width="20"
        height="40"
        fill={getRandomGameCityColor()}
        stroke="#555555"
        strokeWidth="1"
      />
    </svg>
  );
};
