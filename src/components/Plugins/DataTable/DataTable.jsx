import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import DataTableShow from './DataTableShow';
import DataTableFilter from './DataTableFilter';
import DataTableHead from './DataTableHead';
import DataTableBody from './DataTableBody';
import DataTableInfo from './DataTableInfo';
import DataTablePagination from './DataTablePagination';
import './DataTable.css';

/**
 * This DataTable component is a React component that manages a table with filtering, sorting, pagination, and display options.
 * The component handles its own state, including the number of items per page, search value, sorting, total number of items, and the current page.
 *
 * @component
 *
 * @param { String } id - The unique identifier of the table.
 * @param { String } className - The CSS classes applied to the table.
 * @param { Array } columns - The columns of the table, each column being an object containing the column's name and the column's selector in the data.
 * @param { Array } data - The data displayed in the table, each item being an object corresponding to column selectors.
 *
 * @returns { React.Element } The table component.
 */
function DataTable({ id, className, columns, data }) {
  const [ itemsPerPage, setItemsPerPage ] = useState(10)
  const [ searchValue, setSearchValue ] = useState('');
  const [ sorting, setSorting ] = useState({ column: '', order: '' });
  const [currentItemCount, setCurrentItemCount] = useState(0);
  const [ totalItems, setTotalItems ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);

  const handleSelectTable = event => setItemsPerPage(parseInt(event.target.value));

  const handleSearchTable = newSearchvalue => setSearchValue(newSearchvalue);
  
  const handleSortTable = (column, order) => setSorting({ column, order });

  const handlePageTable = page => setCurrentPage(page);

  const filteredData = useMemo(() => {
    let filtered = data;

    if (searchValue) {
      filtered = data.filter(item => Object.values(item).some(value => value.toLowerCase().includes(searchValue.toLowerCase())));
    }

    setTotalItems(filtered.length);
    setCurrentItemCount(Math.min(filtered.length, currentPage * itemsPerPage));

    if (sorting.column) {
      const reversed = sorting.order === 'asc' ? 1 : -1;
      filtered.sort((a, b) => reversed * a[sorting.column].localeCompare(b[sorting.column]));
    }

    return filtered.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage);
  }, [ data, searchValue, sorting, currentPage, itemsPerPage ]);

  return (
    <div className="datatable-grid">
      <DataTableShow onChange={ handleSelectTable } />
      <DataTableFilter onSearch={ handleSearchTable } />

      <table id={ id } className={ className }>
        <DataTableHead columns={ columns } onSorting={ handleSortTable } />
        <DataTableBody entries={ filteredData } columns={ columns } />
      </table>

      <DataTableInfo startItem={ totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0 } endItem={ currentItemCount } totalItems={ data.length } />
      <DataTablePagination totalItems={ totalItems } itemsPerPage={ itemsPerPage } currentPage={ currentPage } onPageChange={ handlePageTable } />
    </div>
  );
}

DataTable.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default DataTable;
