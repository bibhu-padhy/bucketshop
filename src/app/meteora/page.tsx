import CityBlock from "./components/CityBlock";

import { getPools } from "./services/poolService";

export default async function Meteora() {
  const poolGroups = await getPools();
  return (
    <div>
      <CityBlock />
    </div>
  );
}
