import { gql } from "@apollo/client";

const updatePrivateMetadata = gql`
  mutation UpdatePrivateMetadata(
    $id: ID!
    $privateMetadata: [MetadataInput!]!
  ) {
    updatePrivateMetadata(id: $id, input: $privateMetadata) {
      errors {
        message
      }
    }
  }
`;

const updateMetadata = gql`
  mutation UpdateMetadata($id: ID!, $metadata: [MetadataInput!]!) {
    updateMetadata(id: $id, input: $metadata) {
      errors {
        message
      }
    }
  }
`;

export { updateMetadata, updatePrivateMetadata };
