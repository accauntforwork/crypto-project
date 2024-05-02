import React, { useState, useRef } from "react";
import Error from "./Components/Error";
import Slider from "./Components/Slider";
import Table from "./Components/Table";
import Watchlist from "./Components/Watchlist";

import logo from "/logo.svg";

function App() {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const watchlistRef = useRef(null);

  const handleWatchlistClick = () => {
    setIsWatchlistOpen(!isWatchlistOpen);
    handleWatchlistAnimation(isWatchlistOpen);
  };

  const handleWatchlistAnimation = (isOpen) => {
    if (watchlistRef.current) {
      watchlistRef.current.classList.toggle("animate-slide-right-in", isOpen);
      watchlistRef.current.classList.toggle("animate-slide-right-out", !isOpen);
    }
  };

  const isError = false;
  return (
    <div className="max-w-[1920px] mx-auto bg-[#14161A]">
      {isError ? (
        <Error />
      ) : (
        <div className="">
          <nav className="w-[1280px] mx-auto flex justify-between py-3 mb-16">
            <img src={logo} alt="" />
            <div>
              <select defaultValue="USD" className="my-select">
                <option className="text-black" value="USD">
                  USD
                </option>
                <option className="text-black" value="EURO">
                  EURO
                </option>
                <option className="text-black" value="GBP">
                  GBP
                </option>
              </select>
              <button className="button" onClick={handleWatchlistClick}>
                WATCH LIST
              </button>
            </div>
          </nav>
          <Slider></Slider>
          <h2 className="text-[34px] text-white text-center mb-3">
            Cryptocurrency Prices by Market Cap
          </h2>
          <input
            type="text"
            className="search"
            placeholder="Search For a Crypto Currency..."
          />

          <Table />

          {isWatchlistOpen && (
            <div
              ref={watchlistRef}
              className={`watchlist absolute top-0 right-0 p-4 bg-white shadow rounded animate-slide-right-out`}
            >
              <Watchlist onClose={() => setIsWatchlistOpen(false)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
