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

export type Campsite = {
  name: string;
  lon: number;
  lat: number;
  rate: number;
};

export type Activity = {
  name: string;
  lon: number;
  lat: number;
  rate: number;
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

export async function getCampSite(campsite: string): Promise<Campsite> {
  return await fetchURL<Campsite>(`/api/opentripmap/campsites/${campsite}`);
}

export async function getCampSites(): Promise<Campsite[]> {
  return await fetchURL<Campsite[]>("/api/opentripmap/campsites");
}

export async function getCampSitesAround(
  lon: number,
  lat: number,
  radius: number
): Promise<Campsite[]> {
  return await fetchURL<Campsite[]>(
    `/api/opentripmap/lon-lat/radius?lon=${lon}&lat=${lat}&radius=${radius}`
  );
}

export async function getActivities(
  lon: number,
  lat: number,
  radius: number,
  kind: string
): Promise<Activity[]> {
  return await fetchURL<Activity[]>(
    `/api/opentripmap/activities?lon=${lon}&lat=${lat}&radius=${radius}&kind=${kind}`
  );
}
