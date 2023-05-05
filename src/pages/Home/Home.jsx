import { Link } from 'react-router-dom';
import { Container } from '@/components/Layout';
import states from '@/data/states.json';
import departments from '@/data/departments.json';

function Home() {
  const handleSaveEmployee = () => {};

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      <Container>
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              { states.map((state, index) => <option key={ index }>{ state.option }</option>) }
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            { departments.map((department, index) => <option key={ index }>{ department.option }</option> ) }
          </select>
        </form>

        <button onClick={ handleSaveEmployee }>Save</button>
      </Container>

      <div id="confirmation" className="modal">Employee Created!</div>
    </>
  );
}

export default Home;
