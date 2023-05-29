import PropTypes from 'prop-types';
import { SelectMenu } from '@hrnet-plugins/react-selectmenu';
import { Input } from './Input';
import { DateTimePicker } from "../Plugins/DateTimePicker";

/**
 * The FormGroup component is a general purpose form group component.
 * It can render an input element of type text, number, date, or a select menu
 * based on the 'type' prop. It also accepts an 'onChange' callback prop for handling changes.
 *
 * @component
 *
 * @param { String } id - The unique identifier of the form element.
 * @param { String } label - The label for the form element.
 * @param { Array } [ options ] - The options for the select menu. Required if type is 'select'.
 * @param { String } type - The type of the form element. Can be 'text', 'number', 'date', or 'select'.
 * @param { Function } onChange - The function to call when the value of the form element changes.
 * @returns { React.Element } The FormGroup component.
 */
function FormGroup({ id, label, options, type, onChange }) {
  return (
    <>
      <label htmlFor={ id }>{ label }</label>
      { (type === 'text' || type === 'number') && <Input id={ id } type={ type } onChange={ onChange } /> }
      { (type === 'date') && <DateTimePicker id={ id } onChange={ onChange } /> }
      { (type === 'select') && <SelectMenu id={ id } options={ options } onChange={ onChange } /> }
    </>
  );
}

FormGroup.propTypes= {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  option: PropTypes.array,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormGroup;
