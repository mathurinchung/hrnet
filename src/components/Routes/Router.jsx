import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Errors, EmployeeList } from '@/pages';

/**
 * The Router component sets up the application's main routes.
 * It uses react-router v6's Routes and Route components for routing.
 * It includes a fallback route that navigates to an error page when the visited route does not match any of the defined paths.
 *
 * @component
 *
 * @returns { React.Element } The Router component.
 */
function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/employees" element={ <EmployeeList /> } />

      <Route path="/error/:errorParams" element={ <Errors /> } />
      <Route path="*" element={ <Navigate to="/error/notfound" /> } />
    </Routes>
  );
}

export default Router;
