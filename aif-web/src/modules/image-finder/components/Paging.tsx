import { ChangeEventHandler, useState } from "react";
import "./Paging.css";

type PagingPropsType = {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  disabled: boolean;
};

export const Paging = ({
  currentPage,
  totalPages,
  onChangePage,
  disabled,
}: PagingPropsType) => {
  const [pageInput, setPageInput] = useState(String(currentPage));
  const [error, setError] = useState(false);

  const onChangePageInput: ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const pageInputInt = parseInt(pageInput);
    const isValidPage =
      String(pageInputInt) === pageInput &&
      pageInputInt > 0 &&
      pageInputInt >= 1 &&
      pageInputInt <= totalPages;
    if (isValidPage) {
      onChangePage(pageInputInt);
      setError(false);
    } else {
      setError(true);
    }
  };

  const disabledPrev = currentPage <= 1 || disabled;
  const disabledNextPage = currentPage >= totalPages || disabled;

  const prevPage = () => {
    onChangePage(currentPage - 1);
  };

  const nextPage = () => {
    onChangePage(currentPage + 1);
  };

  return (
    <nav className="paging">
      <ul className="pagination pagination-sm justify-content-end">
        <li className="page-item">
          <a
            className={"page-link " + (disabledPrev ? "disabled" : "")}
            onClick={prevPage}
          >
            <span aria-hidden="true">Previous</span>
          </a>
        </li>
        <li className="page-item input-container">
          <form className="h-100" onSubmit={onChangePageInput}>
            Page{" "}
            <input
              className={
                "h-100 fs-6 form-control " + (error ? "is-invalid" : "")
              }
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              disabled={disabled}
            />{" "}
            of {totalPages}
          </form>
        </li>
        <li className="page-item">
          <a
            className={"page-link " + (disabledNextPage ? "disabled" : "")}
            onClick={nextPage}
          >
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Paging.defaultProps = {
  currentPage: 1,
};
