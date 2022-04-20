import { useMutation } from "@apollo/client";
import { updatePrivateMetadata } from "../graphql/data/mutations/app";
import {
  UpdatePrivateMetadataMutation,
  UpdatePrivateMetadataMutationVariables,
} from "../graphql/generated/graphql";

const usePrivateMetadataUpdate = () =>
  useMutation<
    UpdatePrivateMetadataMutation,
    UpdatePrivateMetadataMutationVariables
  >(updatePrivateMetadata);

export default usePrivateMetadataUpdate;
