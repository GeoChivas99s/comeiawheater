import React, { useEffect } from "react";
import { baseUrl } from "services/utils";
import getCityFromUrl from "utils/getCityFromUrl";
import { Link } from "react-router-dom";

export default function City() {
  const cityName = getCityFromUrl();
  console.log(":::",cityName );
  useEffect(() => {
    fetch(`${baseUrl}?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((data) => data.json())
      .then((response) => {
        console.log(":::", response);
      });
  }, []);

  return <Link to="/">Geopvaneekekek</Link>;
}
