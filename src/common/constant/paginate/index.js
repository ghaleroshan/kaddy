import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { asRem } from "../../../helper";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${asRem(18)} ${asRem(10)};
`;

export const CustomPagination = ({ data, setCounter }) => {
  const handlePageChange = (page) => {
    setCounter(page.selected + 1);
  };

  return (
    <Wrapper>
      <div className="pagination">
        {data && data.total_pages > 1 && (
          <ReactPaginate
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={handlePageChange}
            previousClassName="page-item"
            nextClassName="page-item"
            activeClassName="active"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            disabledClassName="disabled"
            pageCount={data.total_pages}
            breakLinkClassName="page-link"
            breakLabel={"..."}
            disableInitialCallback={true}
          />
        )}
      </div>
    </Wrapper>
  );
};
