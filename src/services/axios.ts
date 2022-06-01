import axios from "axios";
import * as next from "next";
import { parseCookies } from "nookies";

export function getAPIClient(
  ctx?:
    | Pick<next.NextPageContext, "req">
    | { req: next.NextApiRequest }
    | null
    | undefined
) {
  const { "zuri-token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://zuri-api.herokuapp.com",
  });

  api.interceptors.request.use((config) => {
    console.log("request=> ", config);

    return config;
  });

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
