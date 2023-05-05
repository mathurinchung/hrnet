import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from '@/pages/Home';
import { Errors } from '@/pages/Errors';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />

      <Route path="/error/:errorParams" element={ <Errors /> } />
      <Route path="*" element={ <Navigate to="/error/notfound" /> } />
    </Routes>
  );
}

export default Router;
