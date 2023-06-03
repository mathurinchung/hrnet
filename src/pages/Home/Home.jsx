import { useState } from 'react';
import { Modal } from '@hrnet-plugins/react-modal';
import { useEmployeeContext } from '@/hooks/employeeContext';
import { Header, Main } from '@/components/Layout';
import { Form } from '@/components/Form';

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
  const [ formData, setFormData ] = useState({ firstName: '', lastName: '', startDate: '', department: 'Sales', dateOfBirth:'', street: '', city: '', state: 'AL', zipCode: '' });
  const [ modal, setModal ] = useState({ show: false, message: '' });

  const handleCloseModal = () => {
    setModal({ ...modal, show: false });
  };

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setFormData({ ...formData, [ name ]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (Object.values(formData).some(value => value.trim() === '')) return setModal({ show: true, message: 'Please fill out the form!' });

    await createEmployee(formData);

    setModal({ show: true, message: 'Employee Created!' });
  };

  return (
    <>
      <Header title="HRnet" link={[ "/employees", "View Current Employees" ]} />

      <Main>
        <h2>Create Employee</h2>

        <Form onSubmit={ handleSubmit } onChange={ handleChange } />
      </Main>

      <Modal id="confirmation" isVisible={ modal.show } onClose={ handleCloseModal }>
        { modal.message }
      </Modal>
    </>
  );
}

export default Home;
