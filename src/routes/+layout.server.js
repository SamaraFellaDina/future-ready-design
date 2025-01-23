import fetchJson from "$lib/fetch-json";

export async function load() {

  const API = import.meta.env.VITE_API_URL || 'https://fdnd-agency.directus.app/items/';
  const urlSites = `${API}frd_site`
  const urlScans = `${API}frd_scans`;

  const sites = await fetchJson(urlSites);
  const scans = await fetchJson(urlScans);
  
  return {
    sites : sites.data,
    scans : scans.data
  }
}