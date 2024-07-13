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
  console.log(data.groups);

  return data.groups;
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
