import { useContext } from 'react';
import { DataTable } from '@hrnet-plugins/react-datatable';
import { EmployeeContext } from '@/context';
import { Header, Main } from '@/components/Layout';
import { columns } from '@/data/DataTable';

/**
 * The EmployeeList component is responsible for displaying a list of current employees.
 * It retrieves the employees data from the EmployeeContext and uses a DataTable component from '@hrnet-plugins/react-datatable' for rendering the list.
 * It also includes a Header and Main layout components.
 *
 * @component
 *
 * @returns { React.Element } The EmployeeList component.
 */
function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  return (
    <>
      <Header title="Current Employees" link={[ "/", "Home" ]} />

      <Main id="Employees">
        <DataTable id="employee-table" className="datatable" columns={ columns } data={ employees } />
      </Main>
    </>
  );
}

export default EmployeeList;
