import { useState } from 'react';
import { ref, push } from 'firebase/database';

/**
 * useCreateEmployee is a custom hook that provides a function for creating an employee in a Firebase database.
 * It also manages and provides any error that occurs during the creation process.
 *
 * @function
 * @param { Object } database - A firebase.database.Database instance representing the Firebase Realtime Database to interact with.
 * @returns { Object } An object containing the createEmployee function and any error that occurred during the last creation operation.
 */
function useCreateEmployee(database) {
  const [error, setError] = useState(null);

  const createEmployee = async (formData) => {
    setError(null);

    const employeesRef = ref(database, 'employees/');

    try {
      await push(employeesRef, formData);
    } catch (error) {
      setError(error);
    }
  };

  return { createEmployee, error };
}

export { useCreateEmployee };
