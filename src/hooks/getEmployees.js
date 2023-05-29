import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';

/**
 * useGetEmployees is a custom hook for retrieving employees data from a Firebase Realtime Database.
 * It manages and provides the list of employees and any error that occurs during the retrieval process.
 *
 * @function
 * @param { Object } database - A firebase.database.Database instance representing the Firebase Realtime Database to interact with.
 * @returns { Object } An object containing the employees data and any error that occurred during the retrieval operation.
 */
function useGetEmployees(database) {
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const employeesRef = ref(database, 'employees');

    get(employeesRef)
    .then(snapshot => (snapshot.exists()) ? setEmployees(Object.values(snapshot.val())) : setError('No data available'))
    .catch(error => setError(error));
  }, [database]);

  return { employees, error };
}

export { useGetEmployees };
