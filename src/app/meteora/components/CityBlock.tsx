import React from "react";
import { Building } from "./Building";

const CityBlock: React.FC = () => {
  return (
    <div className="city-block">
      <Building
        width={200}
        height={400}
        color="#ff9999"
        windowColor="#ffffff"
        windowRows={5}
        windowColumns={4}
        className="building-downtown"
      />
      <Building
        width={150}
        height={300}
        color="#9999ff"
        windowRows={3}
        windowColumns={2}
        className="building-uptown"
      />
    </div>
  );
};

export default CityBlock;
