import React from "react";
import Layout from "components/Layout";
import './style.scss';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="mainWrapper">
        <div className="headTitle">
          <h2> WEATHER</h2>
          <h6>select a city</h6>
        </div>
        <div className="imageWrapper"></div>
        <div className="listWrapper"></div>
      </div>
    </Layout>
  );
}
