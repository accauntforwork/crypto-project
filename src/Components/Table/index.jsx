import React, { useState } from "react";
import Row from "../Row";

function Table() {
  const filteredData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-[1280px] mx-auto mb-2">
      <div className="w-full flex justify-between px-4 py-5 bg-[#87CEEB] rounded-t-md">
        <div className="flex items-center gap-4 w-1/2">
          <h3 className="table-heading">Coin</h3>
        </div>

        <div className="text-white flex justify-between w-1/2">
          <p className="table-heading ml-16">Price</p>
          <p className="table-heading">24h Change</p>
          <p className="table-heading">Market Cap</p>
        </div>
      </div>
      <div>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>
      <div id="pagination" className="flex justify-center items-center py-2">
        {
          <button
            className={`
        ${currentPage === 1 ? "cursor-not-allowed" : ""}
      `}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src="/arrowLeft.svg" alt="" />
          </button>
        }
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={` mx-1 w-8 h-8 rounded-full ${
              currentPage === index + 1 ? "bg-blue-500 text-[#87CEEB]" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {
          <button
            className={`
        ${currentPage === totalPages ? "cursor-not-allowed" : ""}
      `}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src="/arrowRight.svg" alt="" />
          </button>
        }
      </div>
    </div>
  );
}

export default Table;
