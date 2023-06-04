import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

/**
 * A Form component used for creating employees.
 *
 * This component takes onSubmit and onChange callbacks and returns a form element. The form includes a series of FormGroup components which represent the inputs fields of the form.
 *
 * @component
 *
 * @param { Object } fields - The fields data including inputs, departments, address, and states for the Form.
 * @param { Function } onSubmit - The function to be executed when the form is submitted.
 * @param { Function } onChange - The function to be executed when any of the input fields change.
 * @returns { React.Element } A form element for creating an employee.
 */
function Form({ fields, onSubmit, onChange }) {
  return (
    <form id="create-employee" onSubmit={ onSubmit } noValidate>
      <div className="info">
        { fields.inputs.map(input => <FormGroup key={ input.id } id={ input.id } label={ input.label } type={ input.type }  options={ fields.departments }  onChange={ onChange } />) }
      </div>

      <fieldset className="address">
        <legend>Address</legend>

        { fields.address.map(data => <FormGroup key={ data.id } id={ data.id } label={ data.label } type={ data.type } options={ fields.states } onChange={ onChange } />) }
      </fieldset>

      <button id="submit-button" type="submit">Save</button>
    </form>
  );
}

Form.propTypes = {
  fields: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
