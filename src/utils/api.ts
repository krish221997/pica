import axios from "axios";

interface ApiParams {
  url: string;
  method: string;
  headers?: object;
  injectToken: boolean;
  userToken?: string;
  payload: object;
  useSecretKey: boolean;
  env: "live" | "test";
  showAllEnv: boolean;
}

export const api = async ({
  url,
  payload,
  userToken,
  injectToken = true,
  headers = {},
  method = "POST",
  useSecretKey = false,
  env = "live",
  showAllEnv = false,
}: ApiParams) => {
  const secretHeaders = {
    "x-pica-secret": useSecretKey ? "sk_test" : "redacted", // You'll need to implement proper secret key handling
  };

  const showAllEnvHeaders = {
    "x-pica-show-all-environments": showAllEnv,
  };

  const customHeader = injectToken
    ? {
        ...headers,
        ...secretHeaders,
        ...(showAllEnv ? showAllEnvHeaders : {}),
        Authorization: userToken ? `Bearer ${userToken}` : null,
      }
    : headers;

  const { data } = await axios({
    method,
    url,
    headers: customHeader,
    data: payload,
  });

  return data;
}; 