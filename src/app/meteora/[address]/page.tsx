import React from "react";
import { Building } from "../components/Building";
import { getRandomGameCityColor } from "../lib/tools";
import { getPoolDetails } from "../services/poolService";
import style from "../../Home.module.css";

// Helper function to format numbers
const formatNumber = (num: number, decimals: number = 2) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

// Helper function to calculate percentage
const calculatePercentage = (value: number, total: number) => {
  return ((value / total) * 100).toFixed(2);
};

export default async function DLMM({
  params,
}: {
  params: { address: string };
}) {
  const pool = await getPoolDetails(params.address);

  // Calculate additional metrics
  const totalReserve = parseFloat(pool.reserve_x) + parseFloat(pool.reserve_y);
  const reserveXPercentage = calculatePercentage(
    parseFloat(pool.reserve_x),
    totalReserve
  );
  const reserveYPercentage = calculatePercentage(
    parseFloat(pool.reserve_y),
    totalReserve
  );

  return (
    <div
      className={`${style.detail_screen} flex justify-center items-center min-h-screen`}
    >
      <div className="max-w-4xl w-full px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-shrink-0">
            <Building
              height={400}
              width={200}
              color={getRandomGameCityColor()}
            />
          </div>
          <div className="flex-grow w-full">
            <h1 className="text-4xl font-bold text-center mb-6">{pool.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-3 text-center">
                  Performance
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">APR:</span>
                    <span className="text-green-600">
                      {formatNumber(pool.apr * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">APY:</span>
                    <span className="text-green-600">
                      {formatNumber(pool.apy * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">24h Fees:</span>
                    <span>${formatNumber(pool.fees_24h)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">24h Volume:</span>
                    <span>${formatNumber(pool.trade_volume_24h)}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-3 text-center">
                  Liquidity
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Liquidity:</span>
                    <span>${formatNumber(parseFloat(pool.liquidity))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Reserve X:</span>
                    <span>
                      {formatNumber(parseFloat(pool.reserve_x))} (
                      {reserveXPercentage}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Reserve Y:</span>
                    <span>
                      {formatNumber(parseFloat(pool.reserve_y))} (
                      {reserveYPercentage}%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-3 text-center">
                  Fee Structure
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Base Fee:</span>
                    <span>{parseFloat(pool.base_fee_percentage) * 100}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Max Fee:</span>
                    <span>{parseFloat(pool.max_fee_percentage) * 100}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Protocol Fee:</span>
                    <span>
                      {parseFloat(pool.protocol_fee_percentage) * 100}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-3 text-center">
                  Additional Info
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Current Price:</span>
                    <span>${formatNumber(pool.current_price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Bin Step:</span>
                    <span>{pool.bin_step}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Cumulative Fee Volume:</span>
                    <span>
                      ${formatNumber(parseFloat(pool.cumulative_fee_volume))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
