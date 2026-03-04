import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "Y96YMU2N3K.com.shuttrd.app",
          paths: ["/quote-details/*", "/space-details/*", "/about-host/*", "/home"],
        },
      ],
    },
  });
}
