import { MeteoraPools, Pool } from "../types";

const errorMessage = "Failed to fetch data";

export async function getPools(): Promise<MeteoraPools> {
  const res = await fetch("https://app.meteora.ag/clmm-api/pair/all_by_groups");
  if (!res.ok) {
    throw new Error(errorMessage);
  }
  const data = await res.json();

  if (!data.groups) {
    throw new Error(errorMessage);
  }
  return filterTopTVLPairs(data.groups);
}

export async function getPoolDetails(address: string): Promise<Pool> {
  const URL = `https://dlmm-api.meteora.ag/pair/${address}`;
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return await res.json();
}

function filterTopTVLPairs(
  pools: MeteoraPools,
  topCount: number = 5
): MeteoraPools {
  return pools.map((group) => {
    const sortedPairs = [...group.pairs]
      .filter((pair) => +pair.liquidity > 500)
      .sort((a, b) => parseFloat(b.liquidity) - parseFloat(a.liquidity));

    const topPairs = sortedPairs.slice(0, topCount);

    return {
      ...group,
      pairs: organizeBuildingsIntoRows(topPairs),
    };
  });
}

export function organizeBuildingsIntoRows(pairs: Pool[]) {
  const totalBuildings = pairs.length;
  let rows: any = [];

  if (totalBuildings === 1) {
    rows = [[pairs[0]]];
  } else if (totalBuildings === 2) {
    rows = [[pairs[0], pairs[1]]];
  } else if (totalBuildings === 3) {
    rows = [[pairs[0]], [pairs[1], pairs[2]]];
  } else if (totalBuildings === 4) {
    rows = [[pairs[0]], [pairs[1], pairs[2], pairs[3]]];
  } else if (totalBuildings >= 5) {
    rows = [
      [pairs[0], pairs[1]],
      [pairs[2], pairs[3], pairs[4]],
    ];
    // If there are more than 5 pairs, add them to the second row
    for (let i = 5; i < totalBuildings; i++) {
      rows[1].push(pairs[i]);
    }
  }

  return rows;
}
