import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { formattedDate } from '@/utils/formattedDate';
import "react-datepicker/dist/react-datepicker.css";

/**
 * The DateTimePicker component is a wrapper around the DatePicker component from 'react-datepicker'.
 * It manages its own state for the selected date and passes formatted date to the 'onChange' callback prop.
 *
 * @component
 *
 * @param { String } id - The unique identifier of the date picker element.
 * @param { Function } onChange - The function to call when the selected date changes. It is called with an event-like object.
 * @returns { React.Element } The DateTimePicker component.
 */
function DateTimePicker({ id, onChange }) {
  const [ value, setValue ] = useState(null);

  const handleChange = date => {
    setValue(date);

    onChange({ currentTarget: { name: id, value: formattedDate(date) } })
  }

  return (
    <DatePicker id={ id } name={ id } type="date" selected={ value } onChange={ handleChange } showYearDropdown dropdownMode="select" />
  );
}

DateTimePicker.propTypes= {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DateTimePicker;
