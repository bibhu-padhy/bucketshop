// src/app/meteora/components/PoolBuilding.tsx

import React from "react";
import { Building } from "./Building";
import { Pool } from "../types";
import { getRandomGameCityColor } from "../lib/tools";
import Link from "next/link";
import styles from "../../Home.module.css";

interface PoolBuildingProps {
  pool: Pool;
}

const PoolBuilding: React.FC<PoolBuildingProps> = ({ pool }) => {
  const color = getRandomGameCityColor();

  return (
    <div className={`${styles.building}`}>
      <Link href={`/meteora/${pool.address}`}>
        <Building
          width={40}
          height={100}
          color={color}
          windowRows={4}
          windowColumns={3}
        />
      </Link>
    </div>
  );
};

export default PoolBuilding;
