import { useEmployeeContext } from '@/hooks/employeeContext';
import { DataTable } from '@/components/Plugins/DataTable';
import { Header, Main } from '@/components/Layout';
import { columns } from '@/data/DataTable';

/**
 * A component for displaying a list of employees.
 *
 * This component fetches the employees data using `useEmployeeContext` hook, and presents it in a `DataTable`.
 * It also includes a `Header` component for navigation and a `Main` component for layout purposes.
 *
 * @component
 *
 * @returns { React.Element } A React element rendering a list of employees.
 */
function EmployeeList() {
  const { employees } = useEmployeeContext();

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
