import PropTypes from 'prop-types';

/**
 * This DataTableBody component is a React component that manages the body of a data table. 
 * It is responsible for rendering table data, including a message when no data is available.
 *
 * @component
 *
 * @param { Array } entries - The data entries to be displayed in the table body. Each entry should be an object where the keys correspond to the 'data' values of the columns array.
 * @param { Array } columns - The columns of the table, each column being an object containing the column's name and the column's data key in the entries objects.
 *
 * @returns { React.Element } The table body component.
 */
function DataTableBody({ entries, columns }) {
  return (
    <tbody>
      {
        (!entries || entries.length === 0)
        ? (
          <tr className="table-row odd empty">
            <td colSpan={ columns.length }>No data available in table</td>
          </tr>
        )
        : entries.map((entry, index) => (
          <tr key={ index } className={"table-row" + (index % 2 === 0 ? " odd" : "")}>
            { columns.map((column, index) => <td key={ index }>{ entry[ column.data ] }</td>) }
          </tr>
        ))
      }
    </tbody>
  );
}

DataTableBody.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
  })).isRequired
};

export default DataTableBody;
