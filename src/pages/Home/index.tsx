import React from "react";
import "./style.scss";
import Layout from "components/Layout";
import globe from "assets/globe.svg";
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
