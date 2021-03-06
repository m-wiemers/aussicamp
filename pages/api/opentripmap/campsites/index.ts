import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OTM_API_KEY;
const minLat = -43.6345972634;
const maxLat = -10.6681857235;
const minLon = 113.338953078;
const maxLon = 153.569469029;
const campsites = "campsites";

export default async function getCampSites(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results = await fetch(
    `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${minLon}&lon_max=${maxLon}&lat_min=${minLat}&lat_max=${maxLat}&kinds=${campsites}&format=json&limit=5000&apikey=${apiKey}`
  ).then((response) => {
    return response.json();
  });

  const camps = results
    .filter((campsite) => campsite.name !== "")
    .map((campsite) => {
      return {
        name: campsite.name,
        lon: campsite.point.lon,
        lat: campsite.point.lat,
        rate: campsite.rate,
      };
    });

  res.status(200).json(camps);
}
