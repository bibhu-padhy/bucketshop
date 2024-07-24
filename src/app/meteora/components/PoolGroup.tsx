// src/app/meteora/components/PoolGroups.tsx

import React from "react";
import PoolBuilding from "./PoolBuilding";
import styles from "../../Home.module.css";

interface PoolGroupProps {
  group: any;
}

const PoolGroups: React.FC<PoolGroupProps> = ({ group }) => {
  return (
    <div className={styles.poolGroup}>
      <h2>{group.name}</h2>
      <div className={styles.buildingsContainer}>
        {group.pairs.map((pools: any) => (
          <div>
            {pools.map((pool: any) => (
              <PoolBuilding key={pool.address} pool={pool} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolGroups;
