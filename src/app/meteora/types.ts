// src/app/meteora/types.ts

export interface Pool {
  address: string;
  name: string;
  apr: number;
  apy: number;
  base_fee_percentage: string;
  bin_step: number;
  cumulative_fee_volume: string;
  cumulative_trade_volume: string;
  current_price: number;
  farm_apr: number;
  farm_apy: number;
  fees_24h: number;
  hide: boolean;
  liquidity: string;
  max_fee_percentage: string;
  mint_x: string;
  mint_y: string;
  protocol_fee_percentage: string;
  reserve_x: string;
  reserve_x_amount: number;
  reserve_y: string;
  reserve_y_amount: number;
  reward_mint_x: string;
  reward_mint_y: string;
  today_fees: number;
  trade_volume_24h: number;
}

export interface PoolGroup {
  name: string;
  pairs: Pool[];
}

export type MeteoraPools = PoolGroup[];
