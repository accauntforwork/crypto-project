import React from "react";
import Slider from "../Components/Slider";
import Table from "../Components/Table";
import Watchlist from "../Components/Watchlist";
import Heading from "./../Components/Heading/index";

const Home = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#14161A]">
      <div className="">
        <Slider />
        <Heading />
        <Table />
      </div>
    </div>
  );
};

export default Home;
