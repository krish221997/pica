import { apiKeys } from "../config/apiKeys";
import { api } from "../utils/api";
import { ensureAuth } from "../utils/auth";
interface ApiWithToken {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  payload: object;
  headers?: object;
  useSecretKey?: boolean;
  env?: "live" | "test";
  showAllEnv?: boolean;
}

export const apiWithToken = ({
  url,
  headers,
  method,
  payload,
  useSecretKey = true,
  env = "live",
  showAllEnv = false,
}: ApiWithToken) => {
  const cookieWithUser = ensureAuth();
  const userToken = cookieWithUser?.authKey;

  return api({
    url,
    headers,
    injectToken: true,
    method,
    userToken,
    payload,
    useSecretKey,
    env,
    showAllEnv,
  });
};

export const listSecretKeysApi = ({
  redacted = true,
  environment = "test",
}: {
  redacted?: boolean;
  environment?: "test" | "live";
}) =>
  apiWithToken({
    url: `${apiKeys["secrets"]}?platform=pica`,
    method: "GET",
    payload: {},
    useSecretKey: true,
    headers: {
      "x-pica-redaction": redacted ? "true" : "false",
    },
    env: environment,
  }); 