import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from '@/pages/Home';
import { EmployeeList } from '@/pages/Employee';
import { Errors } from '@/pages/Errors';

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
