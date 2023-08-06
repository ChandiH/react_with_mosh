import React from "react";
import _ from "lodash";

const Pagination = ({ totalItems, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(totalItems / pageSize);

  if (pageCount === 1) return null;

  const page = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {page.map((p) => (
          <li
            key={p}
            className={p === currentPage ? "page-item active" : "page-item"}
          >
            <span className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
