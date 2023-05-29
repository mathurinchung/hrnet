import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EmployeeContextProvider } from './context';
import App from './App';
import './sass/main.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmployeeContextProvider>
  </React.StrictMode>
);
