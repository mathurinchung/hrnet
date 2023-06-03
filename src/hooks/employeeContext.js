import { useContext } from 'react';
import { EmployeeContext } from '@/context/EmployeeContext';
import { ref, get, push } from 'firebase/database';
import { database } from '@/config/firebase';

/**
 * React hook for accessing and manipulating employees data.
 *
 * This hook provides a way to read and write employees data using Firebase Realtime Database.
 * It utilizes React's context API to share data across components.
 *
 * @returns { Object } An object containing employees array, getEmployees and createEmployee functions.
 */
export function useEmployeeContext() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const employeesRef = ref(database, 'employees');

  const getEmployees = async () => {
    const snapshot = await get(employeesRef);
    if (snapshot.exists()) setEmployees(Object.values(snapshot.val()));
  };

  const createEmployee = async (formData) => {
    await push(employeesRef, formData);
    setEmployees([ ...employees, formData ]);
  };

  return { employees, getEmployees, createEmployee };
}
