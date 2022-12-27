
import React from "react";
import getClimate from "hooks/getClimate";
import { useQuery } from "@tanstack/react-query";
 
const getCityClimate = async (requestBody: string) => {
  const response = await getClimate(requestBody);
  return response;
};

export const useApiGetClimate = (requestBody: string) => {
  return useQuery([requestBody], () => getCityClimate(requestBody), {
    staleTime: 1000 * 60,
  });
};
