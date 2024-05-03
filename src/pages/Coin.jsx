import React, { useState } from "react";
import Chart from "../Components/Chart";
import CoinDetails from "../Components/CoinDetails";
import Loader from "../Components/Loader";

function Coin() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex p-6 max-w-[1920px] mx-auto">
          <CoinDetails />
          <Chart />
        </div>
      )}
    </div>
  );
}

export default Coin;
