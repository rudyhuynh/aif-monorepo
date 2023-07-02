/**
 * Provide wrapper of the original Fetch API that handle default headers,
 * parse JSON response, adding endpoint to the URL and support type parameter.
 */

import { flow } from "lodash-es";
import { ENDPOINT } from "../constants";

declare type GlobalFetch = (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response>;

const defaultHeaders = {
  "Content-Type": "application/json",
  // Add more default headers here if needed.
};

const defaultHeadersFetch =
  (fetch: GlobalFetch) => (input: string, init?: RequestInit) => {
    return fetch(input, {
      ...init,
      headers: {
        ...defaultHeaders,
        ...init?.headers,
      },
    });
  };

const endpointFetch =
  (fetch: GlobalFetch) => (input: string, init?: RequestInit) => {
    return fetch(`${ENDPOINT}${input}`, init);
  };

const jsonResponseFetch =
  (fetch: GlobalFetch) => async (input: string, init?: RequestInit) => {
    const response = await fetch(input, init);
    let jsonData;
    try {
      jsonData = await response.json();
    } catch (e) {
      console.warn(`[jsonResponseFetch] Error: ${e}. At input: ${input}.`);
    }
    return [jsonData, response.status, response];
  };

export const fetch: <TResponseData>(
  url: string,
  init?: RequestInit
) => Promise<[TResponseData, number, Response]> = flow([
  defaultHeadersFetch,
  endpointFetch,
  jsonResponseFetch,
  // add more fetch enhancers here if needed
])(window.fetch);
