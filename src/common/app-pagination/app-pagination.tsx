import Pagination from "react-bootstrap/Pagination";
import './app-pagination.scss';

interface AppPaginationProps {
  setOffset: (newOffset: number) => void;
  currentOffset: number;
  total: any;
  limit: any;
}

export const AppPagination = ({ setOffset, currentOffset, total, limit }: AppPaginationProps): JSX.Element => {

  const totalPages = Math.ceil(total/limit);
  let items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item onClick={() => handleOnClick(number)} className={`${currentOffset+1==number ? "active" : "page-item"}`}>{number}</Pagination.Item>
    );
  }

  const handlePrevClick = () => {
    if (currentOffset >= 1) {
      setOffset(currentOffset - 1);
    }
  };

  const handleNextClick = () => {    
    if (currentOffset < totalPages) {
      setOffset(currentOffset + 1);
    }
  };

  const handleOnClick = (pageNumber: number) => {
    setOffset(pageNumber-1);
  }

  return (
    <Pagination>
      <Pagination.Prev
        className={`${currentOffset+1 <= 1 ? "disabled" : "pagination-prev"}`}
        onClick={handlePrevClick}
      >
        Prev
      </Pagination.Prev>
      {items}
      <Pagination.Next
        className={`${currentOffset+1 >= totalPages ? "disabled" : "pagination-next"}`}
        onClick={handleNextClick}
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
};
