import { useState, useEffect } from 'react';
import { Modal } from '@hrnet-plugins/react-modal';
import { useEmployeeContext } from '@/hooks/employeeContext';
import { Header, Main } from '@/components/Layout';
import { Form } from '@/components/Form';
import * as fields from '@/data/FormData';

/**
 * A component for creating new employees.
 *
 * This component includes a form for creating a new employee and saving it to the database using `useEmployeeContext` hook.
 * It also includes a modal for confirmation after a successful creation of an employee.
 *
 * @component
 *
 * @returns { React.Element } A React element rendering a form for creating new employees.
 */
function Home() {
  const { createEmployee } = useEmployeeContext();
  const [ formData, setFormData ] = useState({});
  const [ newEmployee, setNewEmployee ] = useState(false);
  const [ modal, setModal ] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFormData({ ...formData, [ name ]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (Object.values(formData).some(value => value.trim() === '')) {
      setNewEmployee(false);
    } else {
      setNewEmployee(true);
      await createEmployee(formData);
    }

    setModal(true);
  };

  useEffect(() => {
    const formFields = {};

    [ ...fields.inputs, ...fields.address ].forEach(input => {
      formFields[input.id] = input.defaultValue || '';
    });
    
    setFormData(formFields);
  }, []);

  return (
    <>
      <Header title="HRnet" link={[ "/employees", "View Current Employees" ]} />

      <Main>
        <h2>Create Employee</h2>

        <Form fields={ fields } onSubmit={ handleSubmit } onChange={ handleChange } />
      </Main>

      <Modal id="confirmation" isVisible={ modal } onClose={ handleCloseModal }>
        { newEmployee ? 'Employee Created!' : 'Please fill out the form!' }
      </Modal>
    </>
  );
}

export default Home;
