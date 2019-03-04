// @flow

export type httpRequestHeaders = {|
  FETCH_URL: string,
  headers: {
    method: string,
    headers: {
      Authorization: string
    },
    mode: string,
    cache: string
  }
|};
