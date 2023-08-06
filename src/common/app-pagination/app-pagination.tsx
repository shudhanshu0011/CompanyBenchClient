import React from "react";
import Pagination from "react-bootstrap/Pagination";
import './app-pagination.scss';

export const AppPagination = (): JSX.Element => {
  return (
    <Pagination>
      <Pagination.Prev className="pagination-prev disabled">Prev</Pagination.Prev>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Next className="pagination-next disabled">Next</Pagination.Next>
    </Pagination>
  );
};
