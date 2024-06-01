// components/permission-table.tsx
interface Permission {
    id: number;
    name: string;
    nrp: string;
    class: string;
    year: number;
  }
  
  interface PermissionTableProps {
    permissions: Permission[];
  }
  
  const PermissionTable: React.FC<PermissionTableProps> = ({ permissions }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-600 px-4 py-2">ID</th>
              <th className="border border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-600 px-4 py-2">NRP</th>
              <th className="border border-gray-600 px-4 py-2">Class</th>
              <th className="border border-gray-600 px-4 py-2">Year</th>
              <th className="border border-gray-600 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td className="border border-gray-600 px-4 py-2">{permission.id}</td>
                <td className="border border-gray-600 px-4 py-2">{permission.name}</td>
                <td className="border border-gray-600 px-4 py-2">{permission.nrp}</td>
                <td className="border border-gray-600 px-4 py-2">{permission.class}</td>
                <td className="border border-gray-600 px-4 py-2">{permission.year}</td>
                <td className="border border-gray-600 px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    S
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                    I
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PermissionTable;
  