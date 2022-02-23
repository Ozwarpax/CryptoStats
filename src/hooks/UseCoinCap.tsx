// ./src/hooks/useStarships.ts

import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://api.coincap.io/v2/assets");
  const json = await result.json();
  return json;
}

export function UseCoinCap() {
  return useQuery(["coincap"], fetchData);
  
}
