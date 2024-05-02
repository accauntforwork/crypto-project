import React from "react";

function Row() {
  return (
    <div className="border border-slate-500 w-full flex justify-between items-center px-4 pt-4 pb-6">
      <div className="flex items-center gap-4 w-1/2">
        <img src="/image.png" className="w-[50px] h-[50px]" alt="" />
        <div>
          <h3 className="text-2xl text-white">BTC</h3>
          <p className="text-sm text-[#A9A9A9]">Bitcoin</p>
        </div>
      </div>

      <div className="text-white flex justify-between w-1/2">
        <p>₹ 3,045,665.00</p>
        <div className="flex gap-4">
          <img src="/eyeWhite.svg" className="w-[26px] h-[26px]" alt="" />
          <span>+3.59%</span>
        </div>
        <p>₹ 59,555,497M</p>
      </div>
    </div>
  );
}

export default Row;
