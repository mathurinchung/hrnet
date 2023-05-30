import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

/**
 * The DataTablePagination component is a React component that manages the pagination of a data table.
 * It displays "Previous" and "Next" buttons to navigate through the pages of data, and disables them appropriately.
 * The component also calculates the total number of pages based on the total number of items and items per page, and updates this value when those props change.
 *
 * @component
 *
 * @param { Number } totalItems - The total number of items to be paginated.
 * @param { Number } itemsPerPage - The number of items to display per page.
 * @param { Number } currentPage - The current page number.
 * @param { Function } onPageChange - The callback function to be invoked when the page changes. It is passed the new page number as an argument.
 *
 * @returns { React.Element } The data table pagination component.
 */
function DataTablePagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    if (totalItems > 0 && itemsPerPage > 0) setTotalPages(Math.ceil(totalItems / itemsPerPage));
}, [totalItems, itemsPerPage]);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={ currentPage === 1 }>Previous</button>
      { totalItems > 0 && currentPage }
      <button onClick={() => onPageChange(currentPage + 1)} disabled={ currentPage === totalPages || totalPages === 0 }>Next</button>
    </div>
  );
}

DataTablePagination.propTypes = {
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func
};

export default DataTablePagination;
