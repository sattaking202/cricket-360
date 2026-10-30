import { getStore } from "@netlify/blobs";
export const store = getStore("cricket360-cache");
export const json = (body,status=200)=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"public, max-age=60, stale-while-revalidate=300","x-content-type-options":"nosniff"}});
export async function readCache(key){try{return await store.get(key,{type:"json"})}catch{return null}}
export async function writeCache(key,value){await store.setJSON(key,value)}