import { gql } from "@apollo/client";

export const errorFragment = gql`
  fragment ErrorFragment on AppError {
    field
    message
  }
`;
