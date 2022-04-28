import { NextApiRequest, NextApiResponse } from "next";

import { getBaseURL } from "../../utils/middleware";
import { version, name } from "../../../package.json";
import {
  AddressFragment,
  MoneyFragment,
  TaxedMoneyFragment,
  PaymentFragment,
  MetadataFragment,
  OrderFragment,
  OrderCreatedFragment,
  OrderFullyPaidFragment,
  CustomerCreatedFragment,
  FulfillmentCreatedFragment,
} from "../../graphql/data/fragments/subscriptions";


const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const baseURL = getBaseURL(_req);

  const manifest = {
    id: "saleor.app",
    version: version,
    name: name,
    permissions: ["MANAGE_ORDERS"],
    configurationUrl: `${baseURL}/configuration`,
    tokenTargetUrl: `${baseURL}/api/register`,
    webhooks: [
      {
        name: "webhook",
        events: [
          "ORDER_CREATED",
          "ORDER_FULLY_PAID",
          "CUSTOMER_CREATED",
          "FULFILLMENT_CREATED",
        ],
        query: `
          ${AddressFragment}
          ${MoneyFragment}
          ${TaxedMoneyFragment}
          ${PaymentFragment}
          ${MetadataFragment}
          ${OrderFragment}

          ${OrderCreatedFragment}
          ${OrderFullyPaidFragment}
          ${CustomerCreatedFragment}
          ${FulfillmentCreatedFragment}

          subscription {
            event {
              ... OrderCreatedFragment
              ... OrderFullyPaidFragment
              ... CustomerCreatedFragment
              ... FulfillmentCreatedFragment
            }
          }
        `,
        targetUrl: `${baseURL}/api/webhook`,
        isActive: true,
      },
    ],
  };

  res.end(JSON.stringify(manifest));
};

export default handler;
