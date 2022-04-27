import { NextApiRequest, NextApiResponse } from "next";

import { getBaseURL } from "../../utils/middleware";
import { version, name } from "../../../package.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const baseURL = getBaseURL(_req);

  const manifest = {
    id: "saleor.app",
    version: version,
    name: "Email app v1",
    permissions: ["MANAGE_ORDERS"],
    configurationUrl: `${baseURL}/configuration`,
    tokenTargetUrl: `${baseURL}/api/register`,
  };
  res.end(JSON.stringify(manifest));
};

export default handler;
