// @flow

export type Headers = {|
  method: string,
  headers: {
    Authorization: string
  },
  mode: string,
  cache: string
|};

export type HttpRequestHeaders = {|
  FETCH_URL: string,
  headers: Headers
|};
