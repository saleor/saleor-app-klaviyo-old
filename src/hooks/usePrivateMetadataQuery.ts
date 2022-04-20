import { useQuery } from "@apollo/client";
import { privateMetadataQuery } from "../graphql/data/queries/app";
import { PrivateMetadataQuery } from "../graphql/generated/graphql";

const usePrivateMetadata = (id?: string, skip?: boolean) =>
  useQuery<PrivateMetadataQuery>(privateMetadataQuery, {
    variables: {
      id,
    },
    skip: skip ?? !id,
  });

export default usePrivateMetadata;
