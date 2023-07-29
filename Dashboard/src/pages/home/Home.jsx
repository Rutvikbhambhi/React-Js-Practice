// import React from "react";

import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import "./home.scss";
import BarCharBox from "../../components/barChartBox/BarCharBox";
import PieCartBox from "../../components/pieCartBox/PieCartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieCartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarCharBox {...barChartBoxVisit} /></div>
      <div className="box box9"><BarCharBox {...barChartBoxRevenue} /></div>
    </div>
  );
};

export default Home;
