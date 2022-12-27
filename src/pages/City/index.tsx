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
      <div className="cityPageWrapper"  style={{ backgroundImage: "linear-gradient(to bottom, #58CBDC, #41A4B7)" }}>
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
          <Icons.MdOutlineWbSunny />
        </div>

        <section className="hoursWrapper">
          <div>
          <label>dawn</label>
          <Icons.MdOutlineWbSunny/>
          <p>20°C</p>
          </div>
          <div>
          <label>dawn</label>
          <Icons.MdOutlineWbSunny/>
          <p>20°C</p>
          </div>
          <div>
          <label>dawn</label>
          <Icons.MdOutlineWbSunny/>
          <p>20°C</p>
          </div>
          <div>
          <label>dawn</label>
          <Icons.MdOutlineWbSunny/>
          <p>20°C</p>
          </div>
        </section>

        <div className="specsWrapper">
          <div>
            <label>wind speed</label>
            <p>5.1 m/s</p>
          </div>
          <span></span>
          <div>
            <label>sunrise</label>
            <p>5:14 AM</p>
          </div>
          <span></span>

          <div>
            <label>sunset</label>
            <p>7:25 PM</p>
          </div>
          <span></span>

          <div>
            <label>humidity</label>
            <p>52%</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
