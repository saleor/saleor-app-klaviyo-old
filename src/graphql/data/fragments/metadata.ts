import gql from "graphql-tag";

export const metadataFragment = gql`
  fragment MetadataItem on MetadataItem {
    key
    value
  }
`;
