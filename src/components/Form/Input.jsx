import PropTypes from 'prop-types';

/**
 * The Input component is a general purpose input field component.
 * It renders an input element of type 'text' or 'number' based on the 'type' prop.
 * It also accepts an 'onChange' callback prop for handling changes.
 *
 * @component
 *
 * @param { String } id - The unique identifier of the input element.
 * @param { String } type - The type of the input element. Can be 'text' or 'number'.
 * @param { Function } onChange - The function to call when the value of the input element changes.
 * @returns { React.Element } The Input component.
 */
function Input({ id, type, onChange }) {
  return (
    <input id={ id } name={ id } type={ type } onChange={ onChange } />
  );
}

Input.propTypes= {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export { Input };
