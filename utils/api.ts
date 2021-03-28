export type APICity = {
  name: string;
  country: string;
  lon: number;
  lat: number;
  population: number;
  timezone: string;
  status: string;
};

export type City = {
  name: string;
  lon: number;
  lat: number;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getCity(): Promise<City> {
  return await fetchURL<City>(`/api/opentripmap`);
}

export async function getCityByName(name: string): Promise<City> {
  return await fetchURL<City>(`/api/opentripmap/${name}`);
}
