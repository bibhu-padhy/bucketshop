// src/app/meteora/components/PoolGroups.tsx

import React from "react";
import PoolBuilding from "./PoolBuilding";

import styles from "../../Home.module.css";
import { PoolGroup } from "../types";

interface PoolGroupProps {
  group: PoolGroup;
}

const PoolGroups: React.FC<PoolGroupProps> = ({ group }) => {
  return (
    <div className={styles.poolGroup}>
      <h2>{group.name}</h2>
      <div className={styles.buildingsContainer}>
        {group.pairs.map((pool) => (
          <PoolBuilding
            key={pool.address}
            pool={pool}
            width={45}
            height={90}
          />
        ))}
      </div>
    </div>
  );
};

export default PoolGroups;
