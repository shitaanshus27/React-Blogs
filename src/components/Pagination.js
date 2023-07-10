import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="border shadow-md py-3 ">
      <div className="flex max-w-[50%] mx-auto justify-between">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="border shadow-md text-center w-36"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border shadow-md text-center w-36"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
