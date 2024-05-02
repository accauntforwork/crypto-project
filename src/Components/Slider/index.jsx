import React from "react";
import Marquee from "react-fast-marquee";
import Slogan from "../Slogan";

export default function Slider() {
  return (
    <div className="py-4 w-full ">
      <Slogan />
      <div className="bg-[url(/bg-header.jpg)] h-[400px] flex items-center">
        <Marquee
          pauseOnHover="true"
          className="py-3 overflow-hidden w-[1280px] mx-auto"
        >
          <div className="flex w-full ">
            <span className="mr-52 block h-16 w-16 bg-red-700">1</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">2</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">3</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
            <span className="mr-52 block h-16 w-16 bg-red-700">4</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

// import React from "react";
// import Marquee from "react-fast-marquee";

// const Slider = () => (
//   <div>
//     <div className="mb-4">
//       <h1 className="text-6xl font-semibold leading-[72px] letter-[-0.5px] text-center text-[#87CEEB]">
//         CRYPTOFOLIO WATCH LIST
//       </h1>
//       <p className="text-center text-sm capitalize font-medium text-[#A9A9A9]">
//         Get all the Info regarding your favorite Crypto <br /> Currency
//       </p>
//     </div>
//     <Marquee pauseOnHover="true" className="py-3 overflow-hidden">
// <span className="h-16 w-16 bg-red-700"></span>
//     </Marquee>
//   </div>
// );

// export default Slider;
