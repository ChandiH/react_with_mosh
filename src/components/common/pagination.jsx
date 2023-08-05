import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { totalItems, pageSize, onPageChange, currentPage } = props;
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
            <a className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
