import { useState } from "react";
import PropTypes from 'prop-types';

/**
 * This DataTableHead component is a React component that manages the header of a data table.
 * It is responsible for rendering table column headers and providing sorting functionality.
 * The component maintains its own state for the sorting field and order, which are initialized as 'id' and 'asc', respectively.
 *
 * @component
 *
 * @param { Array } columns - The columns of the table, each column being an object containing the column's title and the data key for sorting.
 * @param { Function } onSorting - The callback function to be invoked when a column header is clicked to change the sorting order. It is passed the field and order as arguments.
 *
 * @returns { React.Element } The table header component.
 */
function DataTableHead({ columns, onSorting }) {
  const [ sortingField, setSortingField ] = useState('id');
  const [ sortingOrder, setSortingOrder ] = useState('asc');
  
  const handleSortingChange = field => {
    const order = (field === sortingField && sortingOrder === 'asc') ? 'desc' : 'asc';

    setSortingField(field);
    setSortingOrder(order);
    onSorting(field, order);
  };

  return (
    <thead>
      <tr>
        {
          columns.map(({ title, data }) => (
            <th key={ data } onClick={ () => handleSortingChange(data) }>
              { title }
              { sortingField === data ? (sortingOrder === 'asc' ? <span>▼</span> : <span>▲</span>) : null }
            </th>
          ))
        }
      </tr>
    </thead>
  );
}

DataTableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
  })).isRequired,
  onSorting: PropTypes.func.isRequired
};

export default DataTableHead;