// import React, { useState, useRef } from "react";
// // import Error from "./Components/Error";
// import Slider from "./Components/Slider";
// import Table from "./Components/Table";
// import Watchlist from "./Components/Watchlist";

// import { useDispatch } from "react-redux";
// import { setCurrency } from "./redux/currencySlice";

// import logo from "/logo.svg";

// function App() {
//   const options = [
//     { value: "usd", label: "USD" },
//     { value: "euro", label: "EURO" },
//     { value: "gbp", label: "GBP" },
//   ];

//   const dispatch = useDispatch();
//   const handleCurrencyChange = (event) => {
//     dispatch(setCurrency(event.target.value));
//   };

//   const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
//   const watchlistRef = useRef(null);

//   const handleWatchlistClick = () => {
//     setIsWatchlistOpen(!isWatchlistOpen);
//     handleWatchlistAnimation(isWatchlistOpen);
//   };

//   const handleWatchlistAnimation = (isOpen) => {
//     if (watchlistRef.current) {
//       watchlistRef.current.classList.toggle("animate-slide-right-in", isOpen);
//       watchlistRef.current.classList.toggle("animate-slide-right-out", !isOpen);
//     }
//   };

//   return (
//     <div className="max-w-[1920px] mx-auto bg-[#14161A]">
//       <div className="">
//         <nav className="w-[1280px] mx-auto flex justify-between py-3 mb-16">
//           <img src={logo} alt="" />
//           <div>
//             <select onChange={handleCurrencyChange} className="my-select">
//               {options.map((option) => (
//                 <option
//                   key={option.value}
//                   value={option.value}
//                   className="text-black"
//                 >
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             <button className="button" onClick={handleWatchlistClick}>
//               WATCH LIST
//             </button>
//           </div>
//         </nav>
//         <Slider></Slider>
//         <h2 className="text-[34px] text-white text-center mb-3">
//           Cryptocurrency Prices by Market Cap
//         </h2>
//         <input
//           type="text"
//           className="search"
//           placeholder="Search For a Crypto Currency..."
//         />

//         <Table />

//         {isWatchlistOpen && (
//           <div
//             ref={watchlistRef}
//             className="watchlist absolute top-0 right-0 p-4 bg-white shadow rounded animate-slide-right-out"
//           >
//             <Watchlist onClose={() => setIsWatchlistOpen(false)} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import Nav from "../src/Component/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#14161a]">
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/coins/:id" element={<Coin />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
