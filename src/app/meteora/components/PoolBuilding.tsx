// src/app/meteora/components/PoolBuilding.tsx

import React from "react";
import { Building } from "./Building";
import { Pool } from "../types";

interface PoolBuildingProps {
  pool: Pool;
  width: number;
  height: number;
}

const PoolBuilding: React.FC<PoolBuildingProps> = ({ pool, width, height }) => {
  function getRandomGameCityColor() {
    const colors = ["#1E90FF", "#DC143C", "#32CD32", "#FFD700", "#708090"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const color = getRandomGameCityColor();

  return (
    <div style={{ position: "relative", width, height }}>
      <Building
        width={width}
        height={height}
        color={color}
        windowRows={4}
        windowColumns={3}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "5px",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          fontSize: "10px",
        }}
      ></div>
    </div>
  );
};

export default PoolBuilding;
