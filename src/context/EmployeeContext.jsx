import { createContext, useState } from "react";
import PropTypes from 'prop-types';

/**
 * The EmployeeContext is a React Context for managing and providing the employee data.
 */
export const EmployeeContext = createContext();

/**
 * The EmployeeContextProvider component is a wrapper component that provides the employee data to its child components.
 * It manages the state of the employees and provides a function to add a new employee.
 *
 * @component
 *
 * @param { React.Node } children - The children elements to be rendered inside the Provider.
 * @returns { React.Element } The EmployeeContextProvider component.
 */
function EmployeeContextProvider({ children }) {
  const [ employees, setEmployees ] = useState([]);

  const addEmployee = newEmployee => setEmployees(prevEmployees => [...prevEmployees, newEmployee]);

  return (
    <EmployeeContext.Provider value={{ setEmployees, employees, addEmployee }}>
      { children }
    </EmployeeContext.Provider>
  );
}

EmployeeContextProvider.prototypes = {
  children: PropTypes.node.isRequired
};

export default EmployeeContextProvider;
