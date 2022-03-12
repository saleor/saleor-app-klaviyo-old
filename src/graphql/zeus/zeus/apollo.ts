/* eslint-disable */

import { Zeus, GraphQLTypes, InputType, ValueTypes } from './index';
import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client';
import type { MutationHookOptions, QueryHookOptions, LazyQueryHookOptions } from '@apollo/client';


export function useTypedMutation<Z extends ValueTypes[O], O extends "Mutation">(
  mutation: Z | ValueTypes[O],
  options?: MutationHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useMutation<InputType<GraphQLTypes[O], Z>>(gql(Zeus("mutation",mutation, operationName)), options);
}
export function useTypedQuery<Z extends ValueTypes[O], O extends "Query">(
  query: Z | ValueTypes[O],
  options?: QueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",query, operationName)), options);
}
export function useTypedLazyQuery<Z extends ValueTypes[O], O extends "Query">(
  LazyQuery: Z | ValueTypes[O],
  options?: LazyQueryHookOptions<InputType<GraphQLTypes[O], Z>>,
  operationName?: string,
) {
  return useLazyQuery<InputType<GraphQLTypes[O], Z>>(gql(Zeus("query",LazyQuery, operationName)), options);
}
