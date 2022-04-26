import gql from "graphql-tag";
import { metadataFragment } from "../fragments/metadata";

// Note: Saleor 3.2 required
export const appQuery = gql`
  query AppQuery($id: ID) {
    app(id: $id) {
      id
      name
      created
      isActive
      type
      homepageUrl
      appUrl
      configurationUrl
      supportUrl
      version
      accessToken
      privateMetadata {
        ...MetadataItem
      }
      metadata {
        ...MetadataItem
      }
      tokens {
        authToken
        id
        name
      }
    }
  }
  ${metadataFragment}
`;

export const privateMetadataQuery = gql`
  query PrivateMetadataQuery($id: ID) {
    app(id: $id) {
      privateMetadata {
        ...MetadataItem
      }
    }
  }
  ${metadataFragment}
`;
