import ReactPaginate from "react-paginate";
import "./Pagination.css";

export default function Pagination({ pageCount, t, handlePageClick }) {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={t("PROJECTS.previous-lable")}
        nextLabel={t("PROJECTS.next-lable")}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
