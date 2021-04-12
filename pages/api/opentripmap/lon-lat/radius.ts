import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OTM_API_KEY;
const campsites = "campsites";

export default async function getCampsitesAround(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lon, lat, radius } = req.query;
  const result = await fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&kinds=${campsites}&format=json&apikey=${apiKey}`
  ).then((response) => {
    return response.json();
  });

  const camps = result
    .filter((campsite: Record<string, string>) => campsite.name !== "")
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
