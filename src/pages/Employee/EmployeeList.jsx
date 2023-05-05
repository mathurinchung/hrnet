import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout';

function EmployeeList() {
  return (
  <Container id="Employee">
    <h2>Current Employees</h2>
    <table id="employee-table" className="display"></table>
    <Link to="/">Home</Link>
  </Container>
  );
}

export default EmployeeList;
