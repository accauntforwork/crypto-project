import React from "react";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/currencySlice";
import logo from "/logo.svg";

function Navbar() {
  const options = [
    { value: "usd", label: "USD" },
    { value: "euro", label: "EURO" },
    { value: "gbp", label: "GBP" },
  ];

  const dispatch = useDispatch();
  const handleCurrencyChange = (event) => {
    dispatch(setCurrency(event.target.value));
  };
  return (
    <nav className="w-[1280px] mx-auto flex justify-between py-3 mb-16">
      <img src={logo} alt="" />
      <div>
        <select onChange={handleCurrencyChange} className="my-select">
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
        <button className="button">WATCH LIST</button>
      </div>
    </nav>
  );
}

export default Navbar;
