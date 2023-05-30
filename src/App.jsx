import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { database } from './config/firebase';
import { useGetEmployees } from './hooks/getEmployees';
import { Router } from './components/Routes';
import './sass/App.scss';

/**
 * The App component is the root component of the application.
 * It fetches the list of employees from the Firebase database on initial render, and updates the employees context with this data.
 * It also listens for changes in the router's location and updates the document's title based on the current location.
 *
 * @component
 *
 * @returns {React.Element} The App component.
 */
function App() {
  const { getEmployees } = useGetEmployees(database);
  const location = useLocation();

  useEffect(() => { getEmployees(); }, []);
  
  useEffect(() => {
    document.title = (location.pathname === '/employees') ? 'HRnet - Current Employees' : 'HRnet';
  }, [ location ]);

  return (
    <Router />
  );
}

export default App;
