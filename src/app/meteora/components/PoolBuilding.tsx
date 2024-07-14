// src/app/meteora/components/PoolBuilding.tsx

import React from "react";
import { Building } from "./Building";
import { Pool } from "../types";
import { getRandomGameCityColor } from "../lib/tools";
import Link from "next/link";

interface PoolBuildingProps {
  pool: Pool;
  width: number;
  height: number;
}

const PoolBuilding: React.FC<PoolBuildingProps> = ({ pool, width, height }) => {
  const color = getRandomGameCityColor();

  return (
    <div style={{ position: "relative", width, height }}>
      <Link href={`/meteora/${pool.address}`}>
        <Building
          width={width}
          height={height}
          color={color}
          windowRows={4}
          windowColumns={3}
        />
      </Link>
    </div>
  );
};

export default PoolBuilding;
