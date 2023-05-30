import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * This DataTableFilter component is a React component that provides search functionality for a data table.
 * It includes a search form with an input field for search terms. 
 * The search term is sent back to the parent component when it's length is three characters or more, or when the input field is cleared.
 *
 * @component
 *
 * @param { Function } onSearch - The callback function to be invoked when the search value changes and meets the criteria for searching (length is 3 or more, or input field is cleared).
 *
 * @returns { React.Element } The data table filter component.
 */
function DataTableFilter({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    if (newValue.length >= 3 || newValue.length === 0) onSearch(newValue);
  };

  return (
    <form className="search">
      <label htmlFor="search">Search:</label>
      <input id="search" type="search" placeholder="Search..." value={ searchValue } onChange={ handleChange } />
    </form>
  );
}


DataTableFilter.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default DataTableFilter;
