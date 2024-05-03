import React from "react";

function Loader() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <span className="loading loading-spinner text-info w-28 h-28"></span>
    </div>
  );
}

export default Loader;
