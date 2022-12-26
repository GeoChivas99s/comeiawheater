import React from "react";
import "./style.scss";
import Layout from "components/Layout";
import globe from "assets/globe.svg";
export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="mainWrapper">
        <div className="headTitle">
          <h2> WEATHER</h2>
          <h6>select a city</h6>
        </div>
        <div className="imageWrapper">
          {" "}
          <img src={globe} alt="" />{" "}
        </div>
        <div className="listWrapper">
          <ul>
            <li>Dalol</li>
            <li>FairBanks</li>
            <li>London</li>
          </ul>
          <ul>
            <li>Recife</li>
            <li>Vancouver</li>
            <li>Yakutsk</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
