import React from "react";
import "./style.scss";
import Layout from "components/Layout";
import globe from "assets/globe.svg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="mainWrapper">
        <div className="headTitle">
          <p id="title"> WEATHER</p>
          <p id="subtitle">select a city</p>
        </div>
        <div className="imageWrapper">
          {" "}
          <img src={globe} alt="" />{" "}
        </div>
        <div className="listWrapper">
          {/* {cityName.map((item, index) => {
            return  <ul> <li>{item.name}</li> </ul>;
          })} */}

          <ul>
            <li>
              {" "}
              <Link to="/city/Dallol(NG)">Dallol(NG)</Link>{" "}
            </li>
            <li>
              <Link to="/city/Fairbanks(US)"> Fairbanks(US)</Link>
            </li>
            <li>
              {" "}
              <Link to="/city/Londres(GB)">Londres(GB)</Link>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <Link to="/city/Caruaru(BR)">Caruaru(BR)</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/city/Vancouver(CA)">Vancouver(CA)</Link>
            </li>
            <li>
              {" "}
              <Link to="/city/Yakutsk">Yakutsk</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
