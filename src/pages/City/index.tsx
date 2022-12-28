import "./style.scss";
import { Link } from "react-router-dom";
import Loader from "components/Loader";
import Layout from "components/Layout";
import * as Icon from "react-icons/fa";
import * as Icons from "react-icons/md";
import { gradients } from "constants/getGradients";
import getCityFromUrl from "utils/getCityFromPathname";
import { useApiGetClimate } from "services/useApiGetCityWeather";
import { getDateFromUnixUtc } from "utils/getDateFromUnixUtc";
import { ReactNode } from "react";

export default function City() {
  const cityName = getCityFromUrl(document.location.pathname);
  const { isLoading, data } = useApiGetClimate(cityName);
  const mainData = data?.data;

  const weatherIcons: Record<string, ReactNode> = {
    Sun: <Icons.MdOutlineWbSunny />,
    Rain: <Icon.FaCloudShowersHeavy />,
    Snow: <Icon.FaSnowflake />,
    Clouds: <Icon.FaCloud />,
    Mist: <Icon.FaCloudSun />,
    Clear: <Icons.MdOutlineWbSunny />,
  };

  return (
    <Layout pageTitle={cityName}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div
          className="cityPageWrapper"
          style={{
            backgroundImage:
              gradients[mainData?.weather[0]?.main] || gradients["Sun"],
          }}
        >
          <div className="backIcon">
            <Link to="/">
              <Icon.FaArrowLeft />
            </Link>
          </div>

          <div className="tittleWrapper">
            <p className="title1"> {cityName}</p>
            <p className="subtitle1">{mainData?.weather[0]?.main}</p>
          </div>

          <div className="tempWrapper">
            <div className="temp">
              {Number(mainData?.main?.temp).toFixed(1)}
            </div>
            <div className="complements">
              <div className="celcius">°C</div>

              <div className="temVar">
                <p>
                  {" "}
                  <Icon.FaArrowUp />{" "}
                  {Number(mainData?.main?.temp_max).toFixed(1)}°
                </p>
                <p>
                  {" "}
                  <Icon.FaArrowDown />
                  {Number(mainData?.main?.temp_min).toFixed(1)}°{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="Sun">
            {weatherIcons[mainData?.weather[0]?.main] || weatherIcons["Sun"]}
          </div>

          <section className="hoursWrapper">
            <div>
              <label>dawn</label>
              <Icons.MdOutlineWbSunny />
              <p>20°C</p>
            </div>
            <div>
              <label>morning</label>
              <Icons.MdOutlineWbSunny />
              <p>20°C</p>
            </div>
            <div>
              <label>afternoon</label>
              <Icons.MdOutlineWbSunny />
              <p>20°C</p>
            </div>
            <div>
              <label>nigth</label>
              <Icons.MdOutlineWbSunny />
              <p>20°C</p>
            </div>
          </section>

          <div className="specsWrapper">
            <div>
              <label>wind speed</label>
              <p>{mainData?.wind?.speed} m/s</p>
            </div>
            <span></span>
            <div>
              <label>sunrise</label>
              <p>{getDateFromUnixUtc(mainData?.sys?.sunrise)}</p>
            </div>
            <span></span>

            <div>
              <label>sunset</label>
              <p>{getDateFromUnixUtc(mainData?.sys?.sunset)}</p>
            </div>
            <span></span>

            <div>
              <label>humidity</label>
              <p>{mainData?.main?.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
