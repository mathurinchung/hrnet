import { createContext, useState } from "react";
import PropTypes from 'prop-types';

/**
 * Employee context using React's context API.
 *
 * This context is used to share employees data across the component tree.
 * It includes two values: employees (array of employee data) and setEmployees (function to update the employees data).
 */
export const EmployeeContext = createContext();

/**
 * Employee context provider component.
 *
 * This component should be used to wrap any part of the component tree that needs access to the employees data.
 *
 * @component
 *
 * @param { React.Node } children - The children components to be rendered inside the context provider.
 * @returns { React.Element } A React element rendering the EmployeeContext provider.
 */
export function EmployeeContextProvider({ children }) {
  const [ employees, setEmployees ] = useState([]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      { children }
    </EmployeeContext.Provider>
  );
}

EmployeeContextProvider.prototypes = {
  children: PropTypes.node.isRequired
};
