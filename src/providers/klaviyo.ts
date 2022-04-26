import fetch from "node-fetch";

import { Provider } from "./types";

const Klaviyo = (token: string): Provider => {
  const send = async (event: string, recipient: string, context: any) => {
    const formParams = new URLSearchParams();
    formParams.append("data", JSON.stringify({
      token,
      event,
      customer_properties: { $email: recipient },
      properties: context,
    }));

    await fetch("https://a.klaviyo.com/api/track", { method: "POST", body: formParams });
  };

  return {
    send,
  };
};

export default Klaviyo;
