import { NextApiRequest, NextApiResponse } from "next";

import { Klaviyo } from "../../providers";

/*
That's temporary API route exposed just to test email service providers
*/
const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { provider: providerType, event, recipient, context } = request.body;

  let provider;
  switch (providerType) {
    case "klaviyo":
      provider = Klaviyo(process.env.KLAVIYO_TOKEN as string);
      break;
    default:
      response.status(400).json({ success: false, message: "Unrecognized provider." });
      return;
  }

  provider.send(event as string, recipient as string, context);

  response.json({ success: true });
};

export default handler;
