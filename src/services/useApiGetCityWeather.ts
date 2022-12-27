import React from "react";
import getClimate from "api/getClimate";
import { useQuery } from "@tanstack/react-query";

export const useApiGetClimate = (requestBody: string) => {
  return useQuery([requestBody], () => getClimate(requestBody), {
    staleTime: 1000 * 60,
  });
};
