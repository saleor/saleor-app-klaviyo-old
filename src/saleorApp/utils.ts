import { verifyToken } from "../graphql/data/mutations/auth";
import { VerifyTokenMutation } from "../graphql/generated/graphql";
import { saleor } from "../graphql/client";

export async function verifyRequestToken(
  requestToken: string
): Promise<boolean> {
  const validationResponse = await saleor.mutate<VerifyTokenMutation>({
    mutation: verifyToken,
    variables: { token: requestToken },
  });
  return validationResponse.data?.tokenVerify?.isValid || false;
}
