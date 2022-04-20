import { verifyToken } from "../graphql/data/mutations/auth";
import { VerifyTokenMutation } from "../graphql/generated/graphql";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export async function verifyRequestToken(
  requestToken: string,
  client: ApolloClient<NormalizedCacheObject>
): Promise<boolean> {
  const validationResponse = await client.mutate<VerifyTokenMutation>({
    mutation: verifyToken,
    variables: { token: requestToken },
  });
  return validationResponse.data?.tokenVerify?.isValid || false;
}
