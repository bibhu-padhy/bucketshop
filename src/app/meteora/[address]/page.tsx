import { getPoolDetails } from "../services/poolService";

export default async function DLMM({ params }: { params: { address: string } }) {

  
  const pool = await getPoolDetails(params.address)
  
  return <div>DLLM detail : {pool.name} </div>;
}
