import { useContext } from 'react';
import { ref, get } from 'firebase/database';
import { EmployeeContext } from '@/context';

/**
 * useGetEmployees is a custom hook for retrieving employees data from a Firebase Realtime Database.
 * It manages and provides the list of employees and any error that occurs during the retrieval process.
 *
 * @function
 * @param { Object } database - A firebase.database.Database instance representing the Firebase Realtime Database to interact with.
 * @returns { Object } An object containing the employees data and any error that occurred during the retrieval operation.
 */
function useGetEmployees(database) {
  const { setEmployees } = useContext(EmployeeContext);

  const getEmployees = async () => {
    const employeesRef = ref(database, 'employees');

    const snapshot = await get(employeesRef);
    if (snapshot.exists()) setEmployees(Object.values(snapshot.val()));
  };

  return { getEmployees };
}

export { useGetEmployees };
