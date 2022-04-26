import usePrivateMetadataQuery from "./usePrivateMetadataQuery";
import usePrivateMetadataUpdate from "./usePrivateMetadataUpdate";
import { MetadataInput } from "../graphql/generated/graphql";
import { getMutationState } from "../utils/misc";

const usePrivateMetadata = (id?: string) => {
  const { data, loading } = usePrivateMetadataQuery(id);
  const [
    privateMetadataUpdate,
    { loading: updateLoading, error: updateError, called: mutationCalled },
  ] = usePrivateMetadataUpdate();

  const updateMetadata = ({
    metadataArray,
  }: {
    metadataArray: MetadataInput[];
  }) =>
    privateMetadataUpdate({
      variables: {
        id: id!,
        privateMetadata: metadataArray,
      },
    });

  const mutationState = getMutationState(
    mutationCalled,
    updateLoading,
    updateError
  );

  return {
    data,
    updateMetadata,
    queryLoading: loading,
    updateLoading,
    mutationState,
  };
};

export default usePrivateMetadata;
