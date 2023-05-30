import PropTypes from 'prop-types';

/**
 * The DataTableInfo component is a React component that displays the range of entries currently being shown in a data table, 
 * as well as the total number of entries. 
 *
 * @component
 *
 * @param { Number } startItem - The index of the first entry currently being displayed.
 * @param { Number } endItem - The index of the last entry currently being displayed.
 * @param { Number } totalItems - The total number of entries.
 *
 * @returns { React.Element } The data table info component.
 */
function DataTableInfo({ startItem, endItem, totalItems }) {
  return (
    <div className="info">
      showing { startItem } to { endItem ?? 0 } of { totalItems ?? 0 } entries
    </div>
  );
}

DataTableInfo.propTypes = {
  startItem: PropTypes.number,
  endItem: PropTypes.number,
  totalItems: PropTypes.number
};

export default DataTableInfo;
