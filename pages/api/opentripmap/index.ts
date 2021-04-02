import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OTM_API_KEY;

export default async function getCity(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=Brisbane&country=au&apikey=${apiKey}`
  ).then((response) => {
    return response.json();
  });
  const city = {
    name: results.name,
    lon: results.lon,
    lat: results.lat,
  };
  res.status(200).json(city);
}
