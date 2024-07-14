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
  console.log(URL);

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
      pairs: topPairs,
    };
  });
}
