import { ApolloError } from "@apollo/client";
import { ConfirmButtonTransitionState } from "@saleor/macaw-ui";
import { PrivateMetadataQuery } from "../graphql/generated/graphql";
import { MetadataRecord } from "../types";

export interface UserError {
  field: string | null;
  message?: string;
}

export function getMutationState(
  called: boolean,
  loading: boolean,
  error?: ApolloError
): ConfirmButtonTransitionState {
  if (loading) {
    return "loading";
  }
  if (called) {
    return error ? "error" : "success";
  }
  return "default";
}

export const getValuesFromMetadata = (
  name: string,
  data: PrivateMetadataQuery
) =>
  data?.app?.privateMetadata.find(({ key }: MetadataRecord) => key === name)
    ?.value ?? "";
