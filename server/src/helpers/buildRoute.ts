import combineURL from "@helpers/combineURL";

export default function buildFullRoute(baseURL: string, requestedURL: string) {
  if (baseURL) {
    return combineURL(baseURL, requestedURL);
  }
  return requestedURL;
}
