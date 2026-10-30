import {store,readCache,writeCache} from "./lib.mjs";
export default async () => {
  const key=process.env.CRICKETDATA_API_KEY;
  if(!key){console.error("CRICKETDATA_API_KEY is missing");return new Response("Missing API key",{status:500});}
  const old=await readCache("matches");
  // Avoid spending a hit if a successful refresh happened in the last 25 minutes.
  if(old?.updatedAt && Date.now()-new Date(old.updatedAt).getTime()<25*60*1000) return new Response("Cache still fresh");
  const url=new URL("https://api.cricapi.com/v1/currentMatches");
  url.searchParams.set("apikey",key);url.searchParams.set("offset","0");
  const resp=await fetch(url,{headers:{"accept":"application/json"},signal:AbortSignal.timeout(18000)});
  if(!resp.ok) throw new Error(`CricketData HTTP ${resp.status}`);
  const payload=await resp.json();
  if(payload.status!=="success" || !Array.isArray(payload.data)) throw new Error(payload.reason||"Unexpected CricketData response");
  const result={data:payload.data,updatedAt:new Date().toISOString(),source:"CricketData"};
  await writeCache("matches",result);
  return new Response(`Cached ${payload.data.length} matches`);
};
export const config={schedule:"*/30 * * * *"};