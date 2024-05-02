// import React, { useState } from "react";
// import Marquee from "react-fast-marquee";
// import Slogan from "../Slogan";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { TrendingCoins } from "../../API";

// const currency = useSelector((store) => store.currency.currency);

// const [arr, setarr] = useState();
// const [loading, setLoading] = useState(false);
// let navigate = useNavigate();
// const clicked = (val) => navigate(`/coins/${val}`);

// useEffect(() => {
//   const fetchdata = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(TrendingCoins(currency));
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setarr(data);
//       setLoading(false);
//     } catch (error) {
//       console.log("Error", error.message);
//       setLoading(false);
//     }
//   };
//   fetchdata();
// }, [currency]);

// const getclass = (val) => {
//   const numericVal = Number(val);
//   return numericVal < 0 ? "text-red-600 text-xs" : "text-green-600 text-xs";
// };

// export default function Slider() {
//   return (
//     <div className="py-4 w-full ">
//       <Slogan />
//       {loading ? (
//         <loading />
//       ) : (
//         <div className="bg-[url(/bg-header.jpg)] h-[400px] flex items-center">
//           <div className="w-[1280px] mx-auto">
//             <Marquee pauseOnHover="true" className="py-3 overflow-hidden">
//               {arr?.map((curr) => (
//                 <div
//                   onClick={() => clicked(curr.id)}
//                   className="flex flex-col justify-center items-center pt-1 sm:pt-6 text-white"
//                 >
//                   <img
//                     className="h-[75px] bg-transparent"
//                     src={curr.image}
//                     key={curr.id}
//                     alt=""
//                   />
//                   <p className="text-center pt-3">{curr.name}</p>
//                   <p className="p-1">
//                     {currency === "usd" ? "$" : "₹"}{" "}
//                     {curr.current_price.toLocaleString()}
//                   </p>
//                   <span
//                     className={getclass(
//                       curr.price_change_percentage_24h_in_currency
//                     )}
//                   >
//                     {curr.price_change_percentage_24h_in_currency.toFixed(2)} %
//                   </span>
//                 </div>
//               ))}
//             </Marquee>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Slogan from "../Slogan";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { TrendingCoins } from "../../API";

function Slider() {
  const [arr, setarr] = useState();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const currency = useSelector((store) => store.currency.currency);

  const clicked = (val) => navigate(`/coins/${val}`);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(TrendingCoins(currency));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setarr(data);
      } catch (error) {
        console.log("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [currency]);

  const getclass = (val) => {
    const numericVal = Number(val);
    return numericVal < 0
      ? "text-red-600 text-xs ml-2"
      : "ml-2 text-green-600 text-xs";
  };

  return (
    <div className="py-4 w-full ">
      <Slogan />
      {loading ? (
        <div>load date</div>
      ) : (
        <div className="bg-[url(/bg-header.jpg)] h-[400px] flex items-center">
          <div className="w-[1280px] mx-auto">
            <Marquee pauseOnHover="true" className="py-3 overflow-hidden">
              <div className="flex w-full">
                {arr?.map((curr) => (
                  <div
                    onClick={() => clicked(curr.id)}
                    className="flex flex-col justify-center items-center pt-1 text-white mr-52 cursor-pointer"
                    key={curr.id}
                  >
                    <img
                      className="h-[75px] bg-transparent"
                      src={curr.image}
                      alt=""
                    />
                    <p className="text-center pt-3 uppercase">
                      {curr.symbol}
                      <span
                        className={getclass(
                          curr.price_change_percentage_24h_in_currency
                        )}
                      >
                        {curr.price_change_percentage_24h_in_currency.toFixed(
                          2
                        )}{" "}
                        %
                      </span>
                    </p>
                    <p className="p-1">
                      {currency === "usd"
                        ? "$"
                        : currency === "euro"
                        ? "€"
                        : "£"}
                      {curr.current_price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
