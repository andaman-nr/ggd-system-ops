export type checkIfShortUrlExistsInput = {
  originUrl: string;
};

export type checkIfShortUrlExistsOutput = {
  exists: boolean;
  shortUrl: string;
};
