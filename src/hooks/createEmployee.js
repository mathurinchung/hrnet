import { useContext } from 'react';
import { ref, push } from 'firebase/database';
import { EmployeeContext } from '@/context';

/**
 * useCreateEmployee is a custom hook that provides a function for creating an employee in a Firebase database.
 * It also manages and provides any error that occurs during the creation process.
 *
 * @function
 * @param { Object } database - A firebase.database.Database instance representing the Firebase Realtime Database to interact with.
 * @returns { Object } An object containing the createEmployee function and any error that occurred during the last creation operation.
 */
function useCreateEmployee(database) {
  const { addEmployee } = useContext(EmployeeContext);

  const createEmployee = async (formData) => {
    const employeesRef = ref(database, 'employees/');

    await push(employeesRef, formData);
    addEmployee(formData);
  };

  return { createEmployee };
}

export { useCreateEmployee };
