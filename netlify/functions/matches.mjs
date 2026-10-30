import {json,readCache} from "./lib.mjs";
export default async () => {
  const cached=await readCache("matches");
  if(cached) return json(cached);
  return json({data:[],updatedAt:null,message:"Score data has not been cached yet. The scheduled refresh will populate it shortly."},503);
};