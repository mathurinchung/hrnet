import PropTypes from 'prop-types';
import { SelectMenu } from "@hrnet-plugins/react-selectmenu";

/**
 * The DataTableShow component is a React component that allows users to select the number of entries to display per page in a data table.
 * It utilizes the @hrnet-plugins/react-selectmenu component to create a dropdown menu with options for the number of entries to show.
 *
 * @component
 *
 * @param { Function } onChange - The callback function to be invoked when the selected option changes. It is passed the new value as an argument.
 *
 * @returns { React.Element } The data table show entries component.
 */
function DataTableShow({ onChange }) {
  const options = [
    { option: "10", value: "10" },
    { option: "25", value: "25" },
    { option: "50", value: "50" },
    { option: "100", value: "100" }
  ];

  return (
    <div className="show">
      Show
      <SelectMenu id="datatable-show" options={ options } onChange={ onChange } />
      entries
    </div>
  );
}

DataTableShow.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default DataTableShow;
