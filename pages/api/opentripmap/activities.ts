import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OTM_API_KEY;

export default async function getActivities(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lon, lat, radius, kind } = req.query;
  const result = await fetch(
    `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&kinds=${kind}&format=json&apikey=${apiKey}`
  ).then((response) => {
    return response.json();
  });

  const activities = result
    .filter(
      (activity, index, self) =>
        index === self.findIndex((a) => a.name === activity.name)
    )
    .filter((activity) => activity.name !== "")
    .map((activity) => {
      return {
        name: activity.name,
        lon: activity.point.lon,
        lat: activity.point.lat,
        rate: activity.rate,
      };
    });

  res.status(200).json(activities);
}
