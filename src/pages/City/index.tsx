import React, { useEffect } from "react";
import { baseUrl } from "services/utils";
import getCityFromUrl from "utils/getCityFromUrl";
import { Link } from "react-router-dom";
import Layout from "components/Layout";
import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/md";
import "./style.scss";

export default function City() {
  const cityName = getCityFromUrl();
  // console.log(":::",cityName );
  // useEffect(() => {
  //   fetch(`${baseUrl}?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
  //     .then((data) => data.json())
  //     .then((response) => {
  //       console.log(":::", response);
  //     });
  // }, []);

  return (
    <Layout pageTitle={cityName}>
      <div className="cityPageWrapper">
        <div className="backIcon">
          <Link to="/">
            <Icon.FaArrowLeft />
          </Link>
        </div>

        <div className="tittleWrapper">
          <p className="title1"> {cityName}</p>
          <p className="subtitle1">Sunny</p>
        </div>

        <div className="tempWrapper">
          <div className="temp">23</div>
          <div className="complements">
            <div className="celcius">°C</div>

            <div className="temVar">
              <p>
                {" "}
                <Icon.FaArrowUp /> 25°{" "}
              </p>
              <p>
                {" "}
                <Icon.FaArrowDown /> 20°{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="Sun">
          <Icons.MdOutlineWbSunny/>
         </div>
      </div>
    </Layout>
  );
}
