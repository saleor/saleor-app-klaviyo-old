import { NextApiRequest, NextApiResponse } from "next";
import { SALEOR_DOMAIN_HEADER } from "../../../constants";
import client from "../../../graphql/apiClient";
import { privateMetadataQuery } from "../../../graphql/data/queries/app";
import { PrivateMetadataQuery } from "../../../graphql/generated/graphql";
import { Klaviyo } from "../../../providers";

const handledEvents = [
  "order_created",
  "order_fully_paid",
  "customer_created",
  "fulfillment_created",
];

const isEventValid = (event: any) => handledEvents.includes(event);

const getValue = (data: PrivateMetadataQuery, needle: string) =>
  data?.app?.privateMetadata.find(({ key }) => key === needle)?.value;

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  const uri = request.headers[SALEOR_DOMAIN_HEADER];

  if (!uri) {
    return res
      .status(400)
      .json({ success: false, message: "Missing saleor domain" });
  }

  const authToken = process.env.SALEOR_AUTH_TOKEN;

  if (!authToken) {
    return res
      .status(400)
      .json({ success: false, message: "Missing auth token" });
  }

  const { data } = await client(
    `https://${uri}/graphql/`,
    authToken
  ).query<PrivateMetadataQuery>({
    query: privateMetadataQuery,
  });

  const klaviyoPublicKey = getValue(data, "klaviyo_public_key");

  if (!klaviyoPublicKey) {
    return res.status(400).json({ success: false, message: "Missing api key" });
  }

  const provider = Klaviyo(klaviyoPublicKey);

  const event = request.headers["saleor-event"]?.toString();
  const context = request.body;

  if (context.length > 0 && event && isEventValid(event)) {
    const userEmail = context[0]?.user_email;

    if (userEmail) {
      provider.send(event, userEmail, context);
      return res.json({ success: true, message: "Message sent!" });
    }

    return res
      .status(400)
      .json({ success: false, message: "Recipient missing" });
  }

  return res.status(400).json({ success: false, message: "Invalid event" });
};

export default handler;
