import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

function Watchlist() {
  // const openWatchList = useSelector(
  //   (store) => store.openWatchList.openWatchList
  // );

  // useEffect(() => {

  // }, [openWatchList]);

  return (
    <div className="h-[100vh]">
      <h1>Watchlist</h1>
      <div>
        <span>item 1</span>
        <span>item 1</span>
        <span>item 1</span>
        <span>item 1</span>
      </div>
    </div>
  );
}

export default Watchlist;
