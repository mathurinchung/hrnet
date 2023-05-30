import { useState } from 'react';
import { Modal } from '@hrnet-plugins/react-modal';
import { database } from '@/config/firebase';
import { useCreateEmployee } from '@/hooks/createEmployee';
import { Header, Main } from '@/components/Layout';
import { FormGroup } from '@/components/Form';
import { inputs, address, states, departments } from '@/data/FormData';

/**
 * The Home component is responsible for displaying the home page of the application.
 * It includes a form for creating new employees. The form data is managed locally with React state.
 * Upon successful form submission, a new employee is added to the Firebase database and the local employees context, 
 * and a confirmation modal is displayed.
 *
 * @component
 *
 * @returns { React.Element } The Home component.
 */
function Home() {
  const { createEmployee } = useCreateEmployee(database);
  const [ formData, setFormData ] = useState({ firstName: '', lastName: '', startDate: '', department: 'Sales', dateOfBirth:'', street: '', city: '', state: 'AL', zipCode: '' });
  const [ showModal, setShowModal ] = useState(false);

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFormData({ ...formData, [ name ]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (Object.values(formData).some(value => value.trim() === '')) return;

    await createEmployee(formData);

    setShowModal(true);
  };

  return (
    <>
      <Header title="HRnet" link={[ "/employees", "View Current Employees" ]} />

      <Main>
        <h2>Create Employee</h2>

        <form id="create-employee" onSubmit={ handleSubmit } noValidate>
          <div className="info">
            { inputs.map(input => <FormGroup key={ input.id } id={ input.id } label={ input.label } type={ input.type }  options={ departments }  onChange={ handleChange } />) }
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            { address.map(data => <FormGroup key={ data.id } id={ data.id } label={ data.label } type={ data.type } options={ states } onChange={ handleChange } />) }
          </fieldset>

          <button id="submit-button" type="submit">Save</button>
        </form>
      </Main>

      <Modal id="confirmation" isVisible={ showModal } onClose={ () => setShowModal(false) }>Employee Created!</Modal>
    </>
  );
}

export default Home;
