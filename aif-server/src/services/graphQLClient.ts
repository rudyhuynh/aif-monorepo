import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { DATA_SOURCE } from "../constants";

let client: ApolloClient<NormalizedCacheObject>;

export function initGraphQLClient() {
  client = new ApolloClient({
    uri: DATA_SOURCE,
    cache: new InMemoryCache(),
  });
  return client;
}

export function getGraphQLClient() {
  return client;
}
