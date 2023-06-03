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
 * A general purpose DataTable component.
 *
 * This component takes in an array of data and column configurations and outputs a table with sorting, searching, and pagination functionality.
 *
 * @component
 *
 * @param { String } id - The id of the table.
 * @param { String } className - The class name for the table.
 * @param { Array.<Object> } columns - The column configuration for the table.
 * @param { Array.<Object> } data - The data for the table.
 * @returns { React.Element } A React table element with sorting, searching, and pagination.
 */
function DataTable({ id, className, columns, data }) {
  const [ totalItems, setTotalItems ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ itemsPerPage, setItemsPerPage ] = useState(10)
  const [ currentItemCount, setCurrentItemCount ] = useState(0);
  const [ searchValue, setSearchValue ] = useState('');
  const [ sorting, setSorting ] = useState({ column: '', order: '' });

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

