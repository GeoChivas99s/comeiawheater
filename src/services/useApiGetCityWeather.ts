import getClimate from "api/getClimate";
import { useQuery } from "@tanstack/react-query";

export const useApiGetClimate = (requestBody: string) =>
  useQuery([requestBody], () => getClimate(requestBody), {
    staleTime: 1000 * 60,
  });
