import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Logic to disable "Previous" button when on first page
  const isPreviousDisabled = currentPage === 1;

  // Logic to disable "Next" button when on last page
  const isNextDisabled = currentPage === totalPages;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${isPreviousDisabled ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isPreviousDisabled}
          >
            Previous
          </button>
        </li>
        {/* Display page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="page-item">
            <button
              className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${isNextDisabled ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
