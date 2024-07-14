// src/app/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "../Home.module.css";
import PoolGroups from "./components/PoolGroup";
import { getPools } from "./services/poolService";
import { MeteoraPools } from "./types";

export default function Home() {
  const [pools, setPools] = useState<MeteoraPools>([]);
  useEffect(() => {
    const pools = async () => {
      try {
        const pools = await getPools();
        setPools(pools);
      } catch (error) {
        console.log(error);
      }
    };
    pools();
  }, []); 
  return (
    <main className={styles.main}>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className={styles.controls}>
              {/* <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>Reset</button> */}
            </div>
            <TransformComponent>
              <div className={styles.poolGroupsContainer}>
                {pools.map((group, index) => (
                  <PoolGroups key={index} group={group} />
                ))}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </main>
  );
}
