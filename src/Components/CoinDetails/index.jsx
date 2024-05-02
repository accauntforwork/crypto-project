import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../URLs";
import { useSelector } from "react-redux";

const CoinDetails = () => {
  const [coin, setcoin] = useState();
  const currency = useSelector((store) => store.currency.currency);
  console.log(currency);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(SingleCoin(id));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setcoin(data);
        console.log(data);
      } catch (error) {
        console.log("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  return (
    <div className="w-[400px] flex flex-col text-[#FAF0E6] p-6">
      <div className="flex flex-col items-center">
        <img
          className="py-5 w-[200px] h-[200px]"
          src={coin?.image.large}
          alt=""
        />
        <h3 className="py-6 text-5xl font-bold">{coin?.name}</h3>
      </div>
      <div className="flex flex-col items-start gap-5 text-2xl font-bold">
        <h6 className="text-base">
          {coin?.description.en.split("<a" || ".")[0]}.
        </h6>
        <h5>
          Rank: <span className="font-normal">{coin?.market_cap_rank}</span>
        </h5>
        <h5>
          Current Price :{" "}
          <span className="font-normal">
            {currency === "usd" ? "$" : currency === "euro" ? "€" : "£"}
            {coin?.market_data.current_price[currency].toLocaleString()}
          </span>
        </h5>
        <h5>
          Market Cap :{" "}
          <span className="font-normal">
            {currency === "usd" ? "$" : currency === "euro" ? "€" : "£"}
            {Number(
              (coin?.market_data.market_cap[currency] / 1000000).toFixed(0)
            ).toLocaleString()}{" "}
            M
          </span>
        </h5>
      </div>
    </div>
  );
};
export default CoinDetails;
